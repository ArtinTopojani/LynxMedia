import React from 'react';
import Lottie from 'lottie-react';
import manimg from '../../../assets/img/logo/logo.png';
import loadingAnimation from '../../../assets/animations/loading.json';

const Preloader = () => {
  return (
    <div className='preloader__matias'>
      <div className='text-center'>
        <div className='matias'>
          <img src={manimg} alt='Logo' />
        </div>
        <div className='lottie-container'>
          <Lottie animationData={loadingAnimation} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
