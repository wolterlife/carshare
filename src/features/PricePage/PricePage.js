import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './pricePage.scss'

const PricePage = () => {
  return (
    <>
      <Header />
        <p className='text-price'>Тарифы</p>
      <div className='price-cards'>
        <div className='card firstCard'>
          <p className='card-text-top'>Эконом</p>
          <img className='image-car' src='/img/vw.png' alt='vw'/>
          <div className='card-info-container'>
            <p className='card-text-item'>1 день - 53 BYN</p>
            <p className='card-text-item'>1 час - 15 BYN</p>
            <p className='card-text-item'>1 минута - 0.17 BYN</p>
          </div>
        </div>
        <div className='card secondCard'>
          <p className='card-text-top'>Бизнес</p>
          <img className='image-car' src='/img/hend-acc.png' alt='solaris'/>
          <div className='card-info-container'>
            <p className='card-text-item text-black'>1 день - 67 BYN</p>
            <p className='card-text-item text-black'>1 час - 23 BYN</p>
            <p className='card-text-item text-black'>1 минута - 0.27 BYN</p>
          </div>
        </div>
        <div className='card lastCard'>
          <p className='card-text-top'>Премиум</p>
          <img className='image-car' src='/img/almera.png' alt='solaris'/>
          <div className='card-info-container'>
            <p className='card-text-item'>1 день - 72 BYN</p>
            <p className='card-text-item'>1 час - 27 BYN</p>
            <p className='card-text-item'>1 минута - 0.36 BYN</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PricePage;
