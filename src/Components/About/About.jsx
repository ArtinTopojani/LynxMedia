import React, { useEffect, useState } from 'react';

import sectionStar from '../../assets/img/about/section-star.png';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import AboutMe from './AboutMe';

import AOS from 'aos';
import 'aos/dist/aos.css';

const tabList = [
  {
    id: 1,
    name: 'Find the Heat',
    value: 'about',
  },
  {
    id: 2,
    name: 'Wizardry',
    value: 'experience',
  },
  {
    id: 3,
    name: 'Drop & Pop',
    value: 'education',
  },
  {
    id: 4,
    name: 'Cha-Ching!',
    value: 'skills',
  },
];

const About = () => {
  const [isTabActive, setIsTabAative] = useState('about');

  useEffect(() => {
    AOS.init();
  }, []);

  const handleTabClick = (e) => {
    setIsTabAative(e);
  };

  return (
    <>
      <section className='about__section pt-120 pb-120' id='about'>
        <div className='container'>
          <div className='personal__head text-center'>
            {/* <img
              src={sectionStar}
              className='mb-30'
              alt='star'
              data-aos='fade-up'
              data-aos-duration='1000'
            /> */}
            <h1
              data-aos='fade-down'
              data-aos-duration='1500'
              style={{
                fontSize: 'clamp(2rem, 6vw, 5rem)',
                color: 'transparent',
                WebkitTextStroke: '0.000001px #EDE14F',
                textStroke: '1px #EDE14F', // fallback for other browsers
                textAlign: 'center',
                lineHeight: '1.1',
              }}
            >
              WE'RE ARE HERE TO HELP CREATORS LEVEL UP
            </h1>

            <p className='descrp' data-aos='fade-up' data-aos-duration='1500'>
              Here’s How We Do It.
            </p>
          </div>
          <div className='singletab'>
            <ul className='tablinks'>
              {tabList.map(({ id, name, value }) => (
                <li
                  key={id}
                  className={`nav-links ${
                    isTabActive === value ? 'active' : ''
                  } `}
                >
                  <button
                    onClick={() => handleTabClick(value)}
                    className='tablink'
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
            <div className='tabcontents'>
              <AboutMe isTabActive={isTabActive} />
              <Experience isTabActive={isTabActive} />
              <Education isTabActive={isTabActive} />
              <Skills isTabActive={isTabActive} />
            </div>
          </div>
        </div>
      </section>
      {/* <Awards /> */}
    </>
  );
};

export default About;
