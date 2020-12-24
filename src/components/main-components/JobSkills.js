import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const JobSkills = () => {
  const [frontEndSkills] = useState([
    { name: 'HTML', level: '80%' },
    { name: 'CSS', level: '60%' },
    { name: 'Javascript', level: '50%' },
    { name: 'React', level: '60%' },
    { name: 'Redux', level: '70%' },
  ]);

  const [backEndSkills] = useState([
    { name: 'NodeJS', level: '50%' },
    { name: 'ExpressJS', level: '50%' },
    { name: 'MongoDB', level: '60%' },
  ]);

  const showFrontEndSkills = frontEndSkills.map((skill, i) => (
    <ProgressBar key={i} skillName={skill.name} width={skill.level} />
  ));

  const showBackEndSkills = backEndSkills.map((skill, i) => (
    <ProgressBar key={i} skillName={skill.name} width={skill.level} />
  ));

  return (
    <div className='SkillLevelContainer'>
      <div className='SkillLevel'>
        <h3 className='SkillTitle'>FrontEnd</h3>
        {showFrontEndSkills}
      </div>

      <div className='SkillLevel'>
        <h3 className='SkillTitle'>Backend</h3>
        {showBackEndSkills}
      </div>
    </div>
  );
};

export default JobSkills;
