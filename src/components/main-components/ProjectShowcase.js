import React from 'react';

const ProjectShowcase = ({
  image,
  projectType,
  projectTitle,
  projectDetails,
  demoLink,
  codeLink,
}) => {
  return (
    <div className='ProjectContainer'>
      <img className='ProjectImage' src={image} alt='project' />
      <div className='ProjectDetailsContainer'>
        <h3 className='ProjectType'>{projectType}</h3>
        <h3 className='ProjectTitle'>{projectTitle}</h3>
        <p className='ProjectDetails'>{projectDetails}</p>

        <div className='ProjectSource'>
          <button className='ProjectBtn Demo'>
            <a href={demoLink} target='_blank' rel='noreferrer'>
              Demo
            </a>
          </button>
          <button className='ProjectBtn Code'>
            <a href={codeLink} target='_blank' rel='noreferrer'>
              Code
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
