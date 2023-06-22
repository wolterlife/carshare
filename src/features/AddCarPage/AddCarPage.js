import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import './addCarPage.scss'
import {Button, FormControl, FormLabel, Radio, RadioGroup, TextField} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import {addCar} from '../../redux/registrationSlice';

const AddCarPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentAccount } = useSelector(state => state.registration)
  const [type, setRadio] = useState('eco');
  const [model, setModel] = useState('');
  const [img, setImg] = useState('');

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const newCar = () => {
    let id = getRandomInt(1, 9999);
    if (model && img) {
      dispatch(addCar({
        id, type, model, img, coords: {
          lat: 55.18, lng: 30.223
        }
      }));
      navigate('/admin');
    }
  }

  useEffect(() => {
    if (!currentAccount.admin) navigate('/')
  }, [])

  return (
    <>
      <Header/>
      <div className="form-container">
        <div className='form-add'>
          <p>Добавление машины</p>
          <TextField
            onChange={(v) => setModel(v.target.value)}
            color='warning'
            className='text-input'
            id="standard-basic"
            label="Модель"
            variant="standard"/>
          <TextField
            onChange={(v) => setImg(v.target.value)}
            color='warning'
            className='text-input'
            id="standard-basic"
            label="Ссылка на картинку"
            variant="standard"/>
          <FormControl className='radio'>
            <FormLabel id="demo-radio-buttons-group-label">Тип машины</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Эконом"
              name="radio-buttons-group"
              onChange={(v) => {
                setRadio(v.target.value)
              }}
            >
              <FormControlLabel value="Эконом" control={<Radio/>} label="Эконом"/>
              <FormControlLabel value="Премиум" control={<Radio/>} label="Премиум"/>
              <FormControlLabel value="Бизнес" control={<Radio/>} label="Бизнес"/>
            </RadioGroup>
          </FormControl>
          <Button
            onClick={newCar}
            className='button-addCar'
            variant="contained">
            Добавить машину
          </Button>
          <Button
            onClick={() => navigate('/admin')}
            className='button-back'
            variant="contained">
            Вернуться к панели
          </Button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AddCarPage;
