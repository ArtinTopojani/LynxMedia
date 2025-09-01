import React from 'react';
import Title from '../Shared/Title/Title';
import WorkProcessCard from './WorkProcessCard';

const processList = [
  {
    id: 1,
    title: 'Compentence',
    info: `Each platform comes with its own
audience behavior, algorithm
quirks, trending content styles,
and viewing formats requiring
creators to constantly adapt and
recalibrate.`,
    list: [],
  },
  {
    id: 2,
    title: 'Adaptability',
    info: `Platform algorithms and
audiences evolve rapidly,
requiring ongoing focus, insight,
and adaptation to stay effective
across each one.`,
    list: [],
  },
  {
    id: 3,
    title: 'Focus',
    info: `The more time creators spend
juggling platforms and
coordinating teams, the less
energy they can devote to what
truly drives their success:
creating great content.`,
    list: [],
  },
];
const WorkeProcess = () => {
  return (
    <section id='process' className='process__section pt-120 pb-120'>
      <div className='container'>
        <Title mainTitle='BUT WHY PARNTER WITH US?' sortTitle='Why Us?' />
        <div className='row g-4 process__cards-wrapper'>
          {processList.map(({ id, info, list, title }) => (
            <WorkProcessCard key={id} info={info} list={list} title={title} />
          ))}
        </div>
        <h1
          className='custom-hero-heading'
          data-aos='fade-up'
          data-aos-duration='800'
        >
          SO YOU DO WHAT YOU DO BEST
          <br />
          WE WILL HANDLE THE REST
        </h1>
      </div>
    </section>
  );
};

export default WorkeProcess;
