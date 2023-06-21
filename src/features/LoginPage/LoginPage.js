import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {Button, TextField} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import './login.scss'
import {useDispatch, useSelector} from 'react-redux';
import {entryAcc} from '../../redux/registrationSlice';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const { accounts } = useSelector(state => state.registration)

  const goToReg = () => {
    navigate('/registration')
  }

  const entryFoo = () => {
    let acc = accounts.find(account => account.password === password && account.email === email);
    if (acc) {
      dispatch(entryAcc(acc))
      navigate('/start');
    } else {
      setError(true);
    }
  }

  return (
    <>
      <Header/>
      <div className="reg-container">
        <div className="registration">
          <TextField
            onChange={(v) => setEmail(v.target.value)}
            error={error}
            color='warning'
            type='email'
            className='text-input'
            id="standard-basic"
            label="Email"
            variant="standard"/>
          <TextField
            onChange={(v) => setPassword(v.target.value)}
            error={error}
            color='warning'
            type='password'
            className='text-input'
            id="standard-basic"
            label="Пароль"
            variant="standard"/>
          <Button
            onClick={goToReg}
            className='button-toSignIn'
            variant="contained">
            Нет аккаунта
          </Button>
          <Button
            onClick={entryFoo}
            className='button-create'
            variant="contained">
            Войти
          </Button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default LoginPage;
