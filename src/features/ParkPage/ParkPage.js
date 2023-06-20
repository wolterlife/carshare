import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './parkPage.scss';

const ParkPage = () => {
  return (
    <>
      <Header/>
      <div className="parkList">
        <div className='card'>
          <p className='card-text'>VOLKSWAGEN POLO</p>
          <img className='image-car' src='/img/vw.png' alt='vw'/>
        </div>
        <div className='card'>
          <p className='card-text'>RENAULT LOGAN</p>
          <img className='image-car' src='/img/reno.png' alt='reno'/>
        </div>
        <div className='card'>
          <p className='card-text'>Toyota Camry</p>
          <img className='image-car' src='/img/ty_camri.png' alt='ty_camri'/>
        </div>
        <div className='card'>
          <p className='card-text'>LADA VESTA CROSS</p>
          <img className='image-car' src='/img/lada-vesta.png' alt='solaris'/>
        </div>
        <div className='card'>
          <p className='card-text'>KIA OPTIMA</p>
          <img className='image-car' src='/img/kia-opt.png' alt='solaris'/>
        </div>
        <div className='card'>
          <p className='card-text'>HONDA ACCORD</p>
          <img className='image-car' src='/img/hend-acc.png' alt='solaris'/>
        </div>
        <div className='card'>
          <p className='card-text'>LIFAN SOLANO II</p>
          <img className='image-car' src='/img/lifan.png' alt='solaris'/>
        </div>
        <div className='card'>
          <p className='card-text'>NISSAN ALMERA</p>
          <img className='image-car' src='/img/almera.png' alt='solaris'/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ParkPage;
