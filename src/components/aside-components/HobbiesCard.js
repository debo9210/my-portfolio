import React from 'react';
import Hobbies from './Hobbies';
import gaming from '../../images/gaming.jpeg';
import adventure from '../../images/adventure-image.jpeg';
import running from '../../images/running-image.jpeg';

const HobbiesCard = () => {
  return (
    <div className='ProfileContainer'>
      <h3 className='CardTitle'>Hobbies</h3>
      <Hobbies
        image={gaming}
        hobbyType='gaming'
        hobbyDesc='Quisque feugiat malesuada molestie.'
      />

      <Hobbies
        image={adventure}
        hobbyType='adventure'
        hobbyDesc='Quisque feugiat malesuada molestie.'
      />

      <Hobbies
        image={running}
        hobbyType='running'
        hobbyDesc='Quisque feugiat malesuada molestie.'
      />
    </div>
  );
};

export default HobbiesCard;
