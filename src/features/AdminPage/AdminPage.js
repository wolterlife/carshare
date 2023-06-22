import React, {useEffect, useState} from 'react';
import './adminPage.scss'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Button} from '@mui/material';
import PopUpAdmin from '../../components/PopUpAdmin/PopUpAdmin';

const AdminPage = () => {
  const { currentAccount, orders, cars } = useSelector(state => state.registration)
  const [isPopUp, setPopUp] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentAccount.admin) navigate('/')
  }, [])

  const resOrders = orders.map(item => (
    <div className='order-card'>
      <p>({item.car.id}) {item.car.model} {item.price} на протяжении {item.slider} {item.radio} ({item.payment})</p>
      <Button
        className='button-dell'
        variant="contained">
        Удалить заказ
      </Button>
    </div>))



  return (
    <>
      <Header/>
      <p className='order-text'>Заказы</p>
      {resOrders}
      <div className='btn-cont'>
        <Button
          onClick={() => setPopUp(true)}
          className='admin-check'
          variant="contained">
          Просмотреть машины
        </Button>
      </div>
      {isPopUp && <PopUpAdmin cars={cars} setPopUp={setPopUp} />}
      <Footer/>
    </>
  );
};

export default AdminPage;
