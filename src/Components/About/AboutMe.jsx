import React, { useEffect } from 'react';
import {
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram,
} from 'react-bootstrap-icons';

import { Link } from 'react-router-dom';
import personalInfoThumb from '../../assets/img/about/personal-infothumb.png';
import grainImg from '../../assets/img/about/grain.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const contactInfo = [
  {
    id: 1,
    system: 'Email',
    contact: 'Matias999@Gmail.Com',
  },
  {
    id: 2,
    system: 'Phone',
    contact: '+(2) 871 382 023',
  },
  {
    id: 3,
    system: 'Phone',
    contact: 'Victoria Street London,',
  },
  {
    id: 4,
    system: 'Follow',
    socalContact: [
      <Facebook />,
      <Twitter />,
      <Linkedin />,
      <Globe />,
      <Instagram />,
    ],
  },
];
const AboutMe = ({ isTabActive }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={`tabitem ${isTabActive === 'about' ? 'active' : ''} `}>
      <div className='about__v1wrap'>
        <div className='row g-4 align-items-center'>
          <div className='col-lg-5'>
            <div
              className='about__onethumb grain-wrap'
              data-aos='zoom-in'
              data-aos-duration='500'
            >
              <img src={personalInfoThumb} alt='img' />
              <div
                className='grain-overlay'
                style={{
                  backgroundImage: `url(${grainImg})`,
                }}
              ></div>
            </div>
          </div>
          <div className='col-lg-7'>
            <div className='about__onecontent'>
              <h2
                className='h2-head'
                data-aos='fade-up'
                data-aos-duration='500'
              >
                Find The Heat
              </h2>
              <p
                className='p-descrip'
                data-aos='fade-up'
                data-aos-duration='500'
              >
                We review your library to identify the most engaging and
                impactful moments from your content, then craft them into
                standout clips optimized for other platforms.
              </p>
              {/* <div className='about__contactwrap'>
                <div className='row g-4'>
                  {contactInfo.map(({ id, contact, socalContact, system }) => {
                    return (
                      <div
                        key={id}
                        className='col-xxl-6 col-xl-6 col-lg-12 col-md-6'
                        data-aos='zoom-in'
                      >
                        <div className='abox'>
                          <div className='about__contbox__item'>
                            <span className='ptext fz-18 mb-20 d-block'>
                              {system}
                            </span>
                            <Link to={''}>{contact}</Link>
                            {socalContact && (
                              <ul className='d-flex align-items-center gap-2 gap-xl-4'>
                                {socalContact.map((info, index) => (
                                  <li key={index}>
                                    <Link to={''}>{info} </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
