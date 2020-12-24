import React from 'react';
import ProjectShowcase from './ProjectShowcase';
import Project4 from '../../images/Project4.jpg';
import Project5 from '../../images/Project5.jpg';
import Project6 from '../../images/Project6.jpg';

const ProjectReact = () => {
  const projectDetails =
    'In this project, I work with React to create this app . The design is from devchallenge.io. Donec aliquam est dui,vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.';
  return (
    <>
      <ProjectShowcase
        image={Project4}
        projectType='#React #Redux #API'
        projectTitle='Weather App'
        projectDetails={projectDetails}
        demoLink='https://debo9210-weather-app.netlify.app/'
        codeLink='https://github.com/debo9210/weather-app'
      />

      <ProjectShowcase
        image={Project5}
        projectType='#React #Redux #API'
        projectTitle='Github Job Search'
        projectDetails={projectDetails}
        demoLink='https://debo9210-github-jobsearch.netlify.app/'
        codeLink='https://github.com/debo9210/github-jobs-search'
      />

      <ProjectShowcase
        image={Project6}
        projectType='#React'
        projectTitle='Wind BnB'
        projectDetails={projectDetails}
        demoLink='https://debo9210-windbnb.netlify.app/'
        codeLink='https://github.com/debo9210/windbnb'
      />
    </>
  );
};

export default ProjectReact;
