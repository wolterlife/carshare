import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {Button, TextField} from '@mui/material';
import './registration.scss'
import {useNavigate} from 'react-router-dom';
import {addAccount} from '../../redux/registrationSlice';
import {useDispatch} from 'react-redux';

const RegistrationPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const goToLogin = () => {
    navigate('/login')
  }

  const createAccount = () => {
    if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email)) {
      dispatch(addAccount({email, number, password}))
      navigate('/start');
    } else {
      setEmailError(true);
    }
  }


  return (
    <div>
      <Header/>
      <div className="reg-container">
        <div className="registration">
          <TextField
            onChange={(v) => setEmail(v.target.value)}
            color='warning'
            error={emailError}
            type='email'
            className='text-input'
            id="standard-basic"
            label="Email"
            variant="standard"/>
          <TextField
            onChange={(v) => setNumber(v.target.value)}
            color='warning'
            className='text-input'
            id="standard-basic"
            label="Номер телефона"
            variant="standard"/>
          <TextField
            onChange={(v) => setPassword(v.target.value)}
            color='warning'
            type='password'
            className='text-input'
            id="standard-basic"
            label="Пароль"
            variant="standard"/>
          <Button
            onClick={goToLogin}
            className='button-toSignIn'
            variant="contained">
            Уже есть аккаунт
          </Button>
          <Button
            onClick={createAccount}
            className='button-create'
            variant="contained">
            Создать аккаунт
          </Button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default RegistrationPage;
