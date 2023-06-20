import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './rootPage.scss'
import PlaceIcon from '@mui/icons-material/Place';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import AirlineStopsIcon from '@mui/icons-material/AirlineStops';

const RootPage = () => {
  return (
    <div>
      <Header/>
      <div className="home-container">
        <img className={'main-img'} src='/img/main-photo.png' alt='background-page'/>
        <div className='card-home-container'>
          <div className='card-home'>
            <p className='card-text'>300+ автомобилей</p>
            <PlaceIcon sx={{ color: '#ffa600', fontSize: 48 }}/>
          </div>
          <div className='card-home'>
            <p className='card-text'>1200+ клиентов</p>
            <ThumbUpAltIcon sx={{ color: '#ffa600', fontSize: 48 }}/>
          </div>
          <div className='card-home'>
            <p className='card-text'>15000+ поездок</p>
            <AirlineStopsIcon sx={{ color: '#ffa600', fontSize: 48 }}/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default RootPage;
