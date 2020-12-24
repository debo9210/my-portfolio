import React from 'react';
import ProjectShowcase from './ProjectShowcase';
import Project1 from '../../images/project1.jpg';
import Project2 from '../../images/project2.jpg';
import Project3 from '../../images/project3.jpg';

const Project = () => {
  const projectDetails =
    'In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui,vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.';
  return (
    <>
      <ProjectShowcase
        image={Project1}
        projectType='#HTML #CSS #responsive'
        projectTitle='Recipe Blog'
        projectDetails={projectDetails}
        demoLink='https://debo9210-recipe-blog.netlify.app/'
        codeLink='https://github.com/debo9210/recipe-blog'
      />

      <ProjectShowcase
        image={Project3}
        projectType='#HTML #CSS #responsive'
        projectTitle='Interior Consultant'
        projectDetails={projectDetails}
        demoLink='https://interior-consultant-proj.netlify.app/'
        codeLink='https://github.com/debo9210/interior-consultant'
      />

      <ProjectShowcase
        image={Project2}
        projectType='#HTML #CSS #responsive'
        projectTitle='Checkout'
        projectDetails={projectDetails}
        demoLink='https://debo9210-checkout-page.netlify.app/'
        codeLink='https://github.com/debo9210/checkout-page'
      />
    </>
  );
};

export default Project;
