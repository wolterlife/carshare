import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';
import './goPage.scss'
import {Button} from '@mui/material';
import PopUp from '../../components/PopUp/PopUp';
import InfoIcon from '@mui/icons-material/Info';
import {selectForReview} from '../../redux/registrationSlice';

const GoPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentAccount, cars } = useSelector(state => state.registration)
  const [car, chooseCar] = useState({})
  const [popUpVisible, setPopUpVisible] = useState(false)
  const [location, setLocation] = useState({
    lat: 55.18,
    lng: 30.223
  });
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAvMVTetqnwM4ncDCKUF91ICS4buLoNiss"
  })

  const containerStyle = {
    width: '500px',
    height: '500px',
    margin: '24px 12px'
  };

  const selectCar = (item) => {
    setPopUpVisible(true);
    chooseCar(item);
  }

  useEffect(() => {
    if (JSON.stringify(currentAccount) === '{}') navigate('/')
  }, [])

  const res = cars.map(item => (
    <div key={item.id} className='card-car'>
      <div className='top-cont'>
        <img alt='car' className='car-img' src={item.img}/>
        <Link to='/review'>
          <InfoIcon onClick={() => dispatch(selectForReview(item.id))} className='icon' />
        </Link>
      </div>
      <p className='car-name'>{item.model}</p>
      <p className='car-name'>{item.type}</p>
      <Button
        onClick={() => setLocation(item.coords)}
        className='button-location'
        variant="contained">
        Локация
      </Button>
      <Button
        onClick={() => selectCar(item)}
        className='button-select'
        variant="contained">
        Выбрать
      </Button>
    </div>
  ))

  return (
    <>
      <Header/>
      <div className="go-page">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          isLoaded={isLoaded}
          zoom={12}
        >
          {cars.map(item => <Marker key={item.coords.lat} position={item.coords}/>)}
        </GoogleMap>
        <div className="car-selector">
          {res}
        </div>
      </div>
      {popUpVisible &&
        <PopUp setPopUp={setPopUpVisible} car={car}/>
      }
      <Footer/>
    </>
  );
};

export default GoPage;
