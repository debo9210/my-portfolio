import React from 'react';
import ProfileCard from './ProfileCard';
import ExperienceCard from './ExperienceCard';
import HobbiesCard from './HobbiesCard';

const PortfolioAside = () => {
  return (
    <>
      <aside className='PortfolioAside'>
        <ProfileCard />
        <ExperienceCard />
        <HobbiesCard />
      </aside>
    </>
  );
};

export default PortfolioAside;
