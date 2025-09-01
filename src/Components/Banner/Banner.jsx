import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram,
  PlayFill,
} from 'react-bootstrap-icons';

import bannerMan from '../../assets/img/banner/banner-man.png';
import scrollDown from '../../assets/img/banner/scroll-down.png';
import dial from '../../assets/img/banner/dial.png';
import bnArrow from '../../assets/img/banner/bn-arrow.png';
import VideoPlay from '../Shared/VideoPlay/VideoPlay';

const socalIcon = [
  { id: 1, icon: <Facebook /> },
  { id: 2, icon: <Twitter /> },
  { id: 3, icon: <Linkedin /> },
  { id: 4, icon: <Globe /> },
  { id: 5, icon: <Instagram /> },
];

const Banner = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [position, setPosition] = useState(false);

  useEffect(() => {
    if (!position) {
      setPosition(true);
    }
  }, []);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  return (
    <section id='home' className='banner__section'>
      <div className='banner__wrapper'>
        <div className='container'>
          <div className='parent'>
            <div className='row g-4'>
              <div className='col-lg-8'>
                <div className='banner__content'>
                  <h1>
                    <span className='hone'>Turn Clips Into </span>
                    <span className='d-block designers' data-text='Growth'>
                      Growth
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='banner__leftinfo'>
        <div className='right__infoscroll'>
          <Link className='scroll'>scroll down</Link>
          <Link className='scroll__bar'>
            <img src={scrollDown} alt='img' />
          </Link>
        </div>
      </div>

      {/* Uncomment to enable video and social icons */}
      {/*
      <div className='banner__rightinfo'>
        <div className='right__infoscroll'>
          <Link to={''} className='scroll'>Follow Us</Link>
          <Link to={''} className='scroll__bar'>
            <img src={scrollDown} alt='img' />
          </Link>
        </div>
        <div className='banner__xlsocial'>
          <ul className='banner__soci d-grid justify-content-center'>
            {socalIcon.map(({ icon, id }) => (
              <li key={id}>
                <Link to={''}>
                  <i>{icon}</i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {lightboxOpen && (
        <VideoPlay
          setLightboxOpen={setLightboxOpen}
          url='https://www.youtube.com/embed/tgbNymZ7vqY'
        />
      )}
      */}
    </section>
  );
};

export default Banner;
