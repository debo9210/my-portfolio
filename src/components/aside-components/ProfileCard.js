import React from 'react';
import ProfileImage from '../../images/selfie.jpeg';

const ProfileCard = () => {
  return (
    <div className='ProfileContainer'>
      <div className='ImageContainer'>
        <img className='ProfileImage' src={ProfileImage} alt='profile' />
      </div>
      <p className='ProfileName'>omololu adebowale</p>
      <p className='JobTitle'>Full-stack Developer</p>
      <div className='ContactsContainer'>
        <div className='Contacts'>
          <i className='material-icons ContactIcon'>email</i>
          <a
            href='mailto:adebowale9210@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <p className='ContactPerson'>adebowale9210@gmail.com</p>
          </a>
        </div>

        <div className='Contacts'>
          <i className='material-icons ContactIcon'>call</i>
          <p className='ContactPerson'>(+27) 084 584 7638</p>
        </div>
      </div>

      <p className='ProfileAbout'>
        Self-motivated and self-taught web developer, who is willing to learn
        and create outstanding web applications. With a belief that learning is
        continuum...
      </p>
    </div>
  );
};

export default ProfileCard;
