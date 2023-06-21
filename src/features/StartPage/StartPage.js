import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api';
import NeedRegistration from '../../components/NeedRegistration/NeedRegistration';
import {useDispatch, useSelector} from 'react-redux'
import './startPage.scss';
import {Marker} from '@react-google-maps/api';
import {Button, TextField} from '@mui/material';
import {savePayment} from '../../redux/registrationSlice';
import {useNavigate} from 'react-router-dom';

const StartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, currentAccount, payment, cars } = useSelector(state => state.registration)
  const [number, setNumber] = useState(currentAccount.number || '');
  const [card, setCard] = useState('');
  const [cvv, setCvv] = useState('');
  const [data, setData] = useState('');

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAvMVTetqnwM4ncDCKUF91ICS4buLoNiss"
  })

  const containerStyle = {
    width: '500px',
    height: '500px',
    marginTop: '24px',
  };

  const center = {
    lat: 55.18,
    lng: 30.223
  };

  const saveData = () => {
    if (number && card && cvv && data) {
      dispatch(savePayment({ number, card, cvv, data }))
      navigate('/go');
    }
  }

  useEffect(() => {
    const {number, card, cvv, data} = payment;
    if (number && card && cvv && data) {
      navigate('/go')
    }
  }, [])

  return (
    <>
      <Header/>
      {!isAuth ? <NeedRegistration/>
        :
        <div className='start-page'>
          <div className='payment'>
            <p>Данные для оплаты</p>
            <TextField
              onChange={(v) => setNumber(v.target.value)}
              defaultValue={currentAccount.number}
              color='warning'
              className='text-input'
              id="standard-basic"
              label="Номер телефона"
              variant="standard"/>
            <TextField
              onChange={(v) => setCard(v.target.value)}
              color='warning'
              className='text-input'
              type='number'
              id="standard-basic"
              label="Номер карты"
              variant="standard"/>
            <TextField
              onChange={(v) => setData(v.target.value)}
              color='warning'
              className='text-input'
              id="standard-basic"
              placeholder='__/__'
              label="Срок действия карты"
              variant="standard"/>
            <TextField
              onChange={(v) => setCvv(v.target.value)}
              color='warning'
              className='text-input'
              id="standard-basic"
              type='password'
              label="CVV"
              variant="standard"/>
            <Button
              onClick={saveData}
              className='button-save-payment'
              variant="contained">
              Сохранить
            </Button>
          </div>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            isLoaded={isLoaded}
            zoom={12}
          >
            {cars.map(item => <Marker key={item.id} position={item.coords}/>)}
          </GoogleMap>
        </div>
      }
      <Footer/>
    </>
  );
};

export default StartPage;
