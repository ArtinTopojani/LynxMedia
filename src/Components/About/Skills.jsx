import React from 'react';
import chachingImg from '../../assets/img/about/chaching-img.png';
import figma from '../../assets/img/about/figma.png';
import word from '../../assets/img/about/word.png';
import html from '../../assets/img/about/html.png';
import boot from '../../assets/img/about/boot.png';
import grainImg from '../../assets/img/about/grain.png';

const skillsList = [
  {
    id: 1,
    skill: 'Figma',
    percentage: '90%',
    image: figma,
  },
  {
    id: 2,
    skill: 'Wordpress',
    percentage: '95%',
    image: word,
  },
  {
    id: 3,
    skill: 'Figma',
    percentage: '85%',
    image: html,
  },
  {
    id: 4,
    skill: 'Bootstrap',
    percentage: '97%',
    image: boot,
  },
];
const Skills = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === 'skills' ? 'active' : ''} `}>
      <div className='about__v1wrap'>
        <div className='row g-4 align-items-center'>
          <div className='col-lg-5'>
            <div className='about__onethumb grain-wrap'>
              <img src={chachingImg} alt='img' />
              <div
                className='grain-overlay'
                style={{ backgroundImage: `url(${grainImg})` }}
              ></div>
            </div>
          </div>
          <div className='col-lg-7'>
            <div className='about__onecontent'>
              <h2>CHA-CHING!</h2>
              <p>
                We analyze your performance data to unlock maximum earning
                potential from your videos through smart, data-driven
                monetization strategies. CHA-CHING!!!
              </p>
              {/* <div className='about__contactwrap'>
                <div className='row g-4'>
                  {skillsList.map(({ id, skill, image, percentage }) => {
                    return (
                      <div
                        key={id}
                        className='col-xxl-6 col-xl-6 col-lg-12 col-md-6'
                      >
                        <div className='abox myskill__item'>
                          <div className='thumb'>
                            <img src={image} alt='img' />
                          </div>
                          <div className='mys'>
                            <span className='ptext fz-18 mb-15 d-block'>
                              {skill}
                            </span>
                            <h1 className='fw-600'>{percentage}</h1>
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

export default Skills;
