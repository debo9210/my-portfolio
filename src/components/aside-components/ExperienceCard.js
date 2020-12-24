import React from 'react';
import Experience from './Experience';
import Logo1 from '../../images/logo1.png';

const ExperienceCard = () => {
  return (
    <div className='ProfileContainer'>
      <h3 className='CardTitle'>Experiences</h3>
      <Experience
        image={Logo1}
        duration='Feb 2017 - Current'
        jobTitle='Front-end developer'
        jobDesc='Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
      />
      <Experience
        image={Logo1}
        duration='Aug 2016 - Feb 2018'
        jobTitle='Full-stack developer'
        jobDesc='Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
      />

      <Experience
        image={Logo1}
        duration='Jun 2015 - Aug 2016'
        jobTitle='Junior front-end developer'
        jobDesc='Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.'
      />
    </div>
  );
};

export default ExperienceCard;
