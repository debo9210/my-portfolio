import React from 'react';

const Hobbies = ({ image, hobbyType, hobbyDesc }) => {
  return (
    <div className='HobbiesDetailsContainer'>
      <img className='HobbyImage' src={image} alt='hobby' />
      <p className='HobbyType'>{hobbyType}</p>
      <p className='HobbyDesc'>{hobbyDesc}</p>
    </div>
  );
};

export default Hobbies;
