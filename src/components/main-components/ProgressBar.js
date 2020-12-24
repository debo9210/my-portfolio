import React from 'react';

const ProgressBar = ({ skillName, width }) => {
  //   console.log(progressRef.current);
  return (
    <div className='Skill'>
      <p className='SkillName'>{skillName}</p>
      <div className='ProgressBar'>
        <div style={{ width: `${width}` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
