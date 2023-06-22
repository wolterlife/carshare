import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {useDispatch, useSelector} from 'react-redux';
import './reviewPage.scss'
import {Button, TextField} from '@mui/material';
import {addReview} from '../../redux/registrationSlice';
import {useNavigate} from 'react-router-dom';

const ReviewPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { selectedReview, allReview, currentAccount } = useSelector(state => state.registration)
    const [msg, setMsg] = useState('')

    useEffect(() => {
        if (JSON.stringify(selectedReview).length === 2 || JSON.stringify(currentAccount).length === 2) {
          navigate('/')
        }
      }, []
    )

    const reviewRes = allReview.filter(el => el.carId === selectedReview).map(item => (
      <div key={item.mail} className='card-box'>
        <p className='mail'>{item.mail}</p>
        <p className='msg'>{item.msg}</p>
      </div>
    ))

    const sendFoo = () => {
      dispatch(addReview({
        carId: selectedReview,
        msg,
        mail: currentAccount.email,
      }))
    }

    return (
      <>
        <Header/>
        <div className='rev-page'>
          <div className='review-cont'>
            {reviewRes}
          </div>
          <div className='rev-form'>
            <p>Оставить отзыв</p>
            <TextField
              onChange={(v) => setMsg(v.target.value)}
              color='warning'
              placeholder='Напишите всё что думаете'
              className='text-input'
              id="standard-basic"
              multiline
              rows={4}
              label="Текст отзыва"
              variant="standard"/>
            <Button
              onClick={sendFoo}
              className='button-send'
              variant="contained">
              Добавить отзыв
            </Button>
          </div>
        </div>
        <Footer/>
      </>
    )
  }
;

export default ReviewPage;
