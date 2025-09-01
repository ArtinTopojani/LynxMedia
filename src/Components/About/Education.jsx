import React from 'react';
import postImg from '../../assets/img/about/post-img.png';
import grainImg from '../../assets/img/about/grain.png';

const Education = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === 'education' ? 'active' : ''} `}>
      <div className='about__v1wrap'>
        <div className='row g-4  align-items-center'>
          <div className='col-lg-5'>
            <div className='about__onethumb grain-wrap'>
              <img src={postImg} alt='img' />
              <div
                className='grain-overlay'
                style={{ backgroundImage: `url(${grainImg})` }}
              ></div>
            </div>
          </div>
          <div className='col-lg-7'>
            <div className='about__onecontent'>
              <h2>Drop & Pop</h2>
              <p>
                We’ll handle your cross-platform posting, scheduling, and
                content strategy—ensuring your presence is consistent,
                optimized, and aligned with growth goals.
              </p>
              {/* <div className='exprience__box mt-30'>
                <div className='exri__item'>
                  <span className='fz-18 fw-500 base'>2011-2013</span>
                  <div className='expri__cont'>
                    <h4 className='mb-15 text-white'>Programming Course</h4>
                    <p className='fz-18 pra d-block'>New York University</p>
                  </div>
                </div>
                <div className='exri__item'>
                  <span className='fz-18 fw-500 base'>2013-2016</span>
                  <div className='expri__cont'>
                    <h4 className='mb-15 text-white'>University of Design</h4>
                    <p className='fz-18 pra d-block'>Kingston, United States</p>
                  </div>
                </div>
                <div className='exri__item'>
                  <span className='fz-18 fw-500 base'>2016-2018</span>
                  <div className='expri__cont'>
                    <h4 className='mb-15 text-white'>Web Design Course</h4>
                    <p className='fz-18 pra d-block'>New York University</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
