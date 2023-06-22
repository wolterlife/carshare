import React, {useEffect, useState} from 'react';
import './popUp.scss'
import {Button, FormControl, FormLabel, Radio, RadioGroup, Slider} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import {useDispatch, useSelector} from 'react-redux';
import {createOrder} from '../../redux/registrationSlice';
import {useNavigate} from 'react-router-dom';

const PopUp = ({ setPopUp, car }) => {
  const {payment} = useSelector(state => state.registration)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [maxSlider, setMaxSlider] = useState(59);
  const [slider, setSlider] = useState(1);
  const [buttonDis, setButtonDis] = useState(false);
  const [price, setPrice] = useState(1);
  const [radio, setRadio] = useState('minutes');
  const [mark, setMarks] = useState(false);

  useEffect(() => {
    switch (radio) {
      case 'minutes':
        if (car.type === 'Эконом') setPrice((slider * 0.17).toFixed(2) + ' BYN')
        if (car.type === 'Бизнес') setPrice((slider * 0.27).toFixed(2) + ' BYN')
        if (car.type === 'Премиум') setPrice((slider * 0.36).toFixed(2) + ' BYN')
        setMaxSlider(59);
        setMarks(false);
        break;
      case 'hours':
        if (car.type === 'Эконом') setPrice((slider * 15).toFixed(2) + ' BYN')
        if (car.type === 'Бизнес') setPrice((slider * 23).toFixed(2) + ' BYN')
        if (car.type === 'Премиум') setPrice((slider * 27).toFixed(2) + ' BYN')
        setMarks(true);
        setMaxSlider(23);
        break;
      case 'days':
        if (car.type === 'Эконом') setPrice((slider * 53).toFixed(2) + ' BYN')
        if (car.type === 'Бизнес') setPrice((slider * 67).toFixed(2) + ' BYN')
        if (car.type === 'Премиум') setPrice((slider * 72).toFixed(2) + ' BYN')
        setMarks(true);
        setMaxSlider(3);
        break;
      default: return;
    }
  }, [radio, slider])

  const sendOrder = () => {
    const order = {
      car,
      price,
      radio,
      slider,
      payment: payment.number,
    }
    dispatch(createOrder(order));
    setButtonDis(true);
    setPrice('Успешно')
    setTimeout(() => {navigate('/')}, 3000)

  }

  return (
    <div id="popup1" className="overlay">
      <div className="popup">
        <h2>Финальное оформление</h2>
        <button disabled={buttonDis} onClick={() => setPopUp(false)} className="close">X</button>
        <div className="content">
          <div className='top'>
            <div className='card-car'>
              <img alt='car' className='car-img' src={car.img}/>
              <p className='car-name'>{car.model}</p>
              <p className='car-name'>{car.type}</p>
            </div>
            <div className='price'>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Выбор тарифа</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="minutes"
                  name="radio-buttons-group"
                  onChange={(v) => {
                    setRadio(v.target.value)
                    setSlider(1);
                  }}
                >
                  <FormControlLabel value="minutes" control={<Radio />} label="Минутный" />
                  <FormControlLabel value="hours" control={<Radio />} label="Часовой" />
                  <FormControlLabel value="days" control={<Radio />} label="Дневной" />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <Slider
            onChange={(v) => setSlider(v.target.value)}
            className='slider'
            size="small"
            min={1}
            marks={mark}
            max={maxSlider}
            defaultValue={1}
            aria-label="Small"
            valueLabelDisplay="auto"
          />
          <Button
            onClick={sendOrder}
            disabled={buttonDis}
            className='button-select'
            variant="contained">
            Поехали ({price})
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
