import React from 'react';
import './footer.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className="footer">
      <p className='mail-text'>ewwewe.wewew@gmail.com</p>
      <div className="text-container">
        <p className="text">Компания "Ischenko"</p>
        <p className="text">Контакты +375337777777</p>
      </div>
      <div>
        <a href='https://www.instagram.com' className='link'>
          <InstagramIcon sx={{ fontSize: 44, color: 'white' }}/>
        </a>
        <a href='https://youtube.com' className='link'>
          <YouTubeIcon sx={{ fontSize: 44, color: 'white' }}/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
