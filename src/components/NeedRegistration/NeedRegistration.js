import React from 'react';
import './needRegistration.scss';
import {Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const NeedRegistration = () => {
  const navigate = useNavigate()

  const toRegister = () => {
    navigate('/registration')
  }

  const toSignIn = () => {
    navigate('/login')
  }


  return (
    <div className='need-registration'>
      <div className="container">
        <p className={'text'}>К сожалению, чтобы пользоваться сервисом необходимо зарегистрироваться</p>
        <Button
          onClick={toRegister}
          className='button-to-register'
          variant="contained">
          Регистрация
        </Button>
        <Button
          onClick={toSignIn}
          className='button-to-login'
          variant="contained">
          Вход
        </Button>
      </div>
    </div>
  );
};

export default NeedRegistration;
