import React from 'react';

import Title from '../Shared/Title/Title';
// import Lightbox from '../Shared/LightBox/LightBox';  // Commented out for now
import ProjectCard from '../Shared/ProjectCard/ProjectCard';
import { imagesList, projectList } from '../../Utlits/projectList';
import { Link } from 'react-router-dom';

const Projects = () => {
  // const [currentId, setCurrentId] = React.useState(0);
  // const [lightboxOpen, setLightboxOpen] = React.useState(false);

  // const openLightbox = (index) => {
  //   setCurrentId(index);
  //   setLightboxOpen(true);
  // };

  return (
    <section className='project__section pt-120 pb-120' id='projects'>
      <div className='container'>
        <Title
          mainTitle={'Look at our portfolio and give us your feedback'}
          sortTitle={'Complete Project'}
        />

        <div className={`project__wrapone`}>
          {projectList.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
              navigate='/protfolio'
              // openLightbox={openLightbox}  // commented out
            />
          ))}
        </div>

        {/* <div className="custom__hover">
          <Link to={"/protfolio"}
            className="hover__circle mauto"
            data-aos="zoom-out-down"
            data-aos-duration="2000"
          >
            <span className="box">
              <i className="bi bi-arrow-up-right"></i>
              <span className="textmore"> Click More Work </span>
            </span>
          </Link>
        </div> */}
      </div>

      {/*
      {lightboxOpen && (
        <Lightbox
          images={imagesList}
          setLightboxOpen={setLightboxOpen}
          currentId={currentId}
        />
      )}
      */}
    </section>
  );
};

export default Projects;
