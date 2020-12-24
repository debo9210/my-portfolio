import React from 'react';

const Experience = ({ image, duration, jobTitle, jobDesc }) => {
  return (
    <div className='ExperienceContainer'>
      <img className='CompanyLogo' src={image} alt='company' />
      <div className='ExperienceDetails'>
        <p className='ExperienceDuration'>{duration}</p>
        <p className='ExperienceJobTitle'>{jobTitle}</p>
        <p className='ExperienceJobDesc'>{jobDesc}</p>
      </div>
    </div>
  );
};

export default Experience;
