import React from 'react';
import './header.scss'
import {Button} from '@mui/material';
import {AccountCircle} from '@mui/icons-material';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {exitAccount} from '../../redux/registrationSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { isAuth, currentAccount } = useSelector(state => state.registration)

  const exitFoo = () => {
    dispatch(exitAccount());
  }

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
      </div>
      <div className="menuRightContainer">
        {
          !isAuth ?
            <Link to={'/registration'}>
              <Button
                className="menuButton-register"
                variant="outlined"
                startIcon={<AccountCircle/>}>
                Регистрация
              </Button>
            </Link> :
            <>
              <p>{currentAccount.email}</p>
              <Link to={'/'}>
                <Button
                  onClick={exitFoo}
                  className="menuButton-register"
                  variant="outlined"
                  startIcon={<DisabledByDefaultIcon/>}>
                  Выход
                </Button>
              </Link>
            </>
        }

      </div>
    </div>
  );
};

export default Header;
