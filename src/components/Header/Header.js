import React from 'react';
import './header.scss'
import {Button} from '@mui/material';
import {AccountCircle} from '@mui/icons-material';

const Header = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src='/img/header.png' alt="logo"/>
        <p className="main-text">CarMate</p>
      </div>
      <div>
        <Button className="menuButton">Приступить к аренде</Button>
        <Button className="menuButton">Цены</Button>
        <Button className="menuButton">Автопарк</Button>
        <Button className="menuButton" variant="text">О нас</Button>
      </div>
      <div className="menuRightContainer">
        <Button className="menuButton-register" variant="outlined" startIcon={<AccountCircle />}>Регистрация</Button>
      </div>
    </div>
  );
};

export default Header;
