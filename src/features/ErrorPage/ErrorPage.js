import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './errorPage.scss'

const ErrorPage = () => {
  return (
    <>
      <Header />
      <p className='textError'>Error 404</p>
      <Footer />
    </>
  );
};

export default ErrorPage;
