import React, {useState} from 'react';
import './popUpAdmin.scss'
import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {dellCar} from '../../redux/registrationSlice';

const PopUpAdmin = ({ setPopUp, cars }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const resCars = cars.map(item => (
    <div className='admin-cars'>
      <p className='car-description'>({item.id}) {item.model} ({item.type}) </p>
      <img src={item.img} alt='car' className='car-img' />
      <Button
        onClick={() => dispatch(dellCar(item.id))}
        className='button-dell'
        variant="contained">
        Удалить
      </Button>
    </div>
  ))

  return (
    <div id="popup1" className="overlayAdmin">
      <div className="popupAdmin">
        <h2>Работа с машинами</h2>
        <button onClick={() => setPopUp(false)} className="close">X</button>
        <div className="content">
          <div className='top'>
            {resCars}
          </div>
          <Button
            onClick={() => navigate('/addCar')}
            className='button-select'
            variant="contained">
            Добавить машину
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopUpAdmin;
