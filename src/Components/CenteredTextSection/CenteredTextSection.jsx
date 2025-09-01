import React from 'react';
import './centeredtextsection.scss';

const CenteredTextSection = () => {
  return (
    <section className='centered-text-section'>
      <div className='container' data-aos='fade-up' data-aos-duration='1000'>
        <h2 className='fw-500 mb-3'>NO EXTRA EFFORT</h2>
        <h2 className='fw-500 last-title' style={{ marginBottom: '40px' }}>
          JUST EXTRA REVENUE
        </h2>

        <p className='fz-24'>
          There are no upfront costs for creators. <br /> With our revenue
          sharing model, we succeed only when you do. <br /> We’ll put our
          resources money, technology, data, and team into driving your growth
          across multiple platforms.
        </p>
      </div>
    </section>
  );
};

export default CenteredTextSection;
