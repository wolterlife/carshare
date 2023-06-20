import React from 'react';
import './header.scss'
import {Button} from '@mui/material';
import {AccountCircle} from '@mui/icons-material';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link className='underline' to={'/'}>
        <div className="logoContainer">
          <img className="logo" src='/img/header.png' alt="logo"/>
          <p className="main-text">CarMate</p>
        </div>
      </Link>
      <div>
        <Link to={'/start'}>
          <Button className="menuButton" variant="text">Приступить к аренде</Button>
        </Link>
        <Link to={'/price'}>
          <Button className="menuButton" variant="text">Цены</Button>
        </Link>
        <Link to={'/park'}>
          <Button className="menuButton">Автопарк</Button>
        </Link>
        <Link to={'/about'}>
          <Button className="menuButton" variant="text">О нас</Button>
        </Link>
      </div>
      <div className="menuRightContainer">
        <Link to={'registration'}>
          <Button className="menuButton-register" variant="outlined" startIcon={<AccountCircle/>}>Регистрация</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
