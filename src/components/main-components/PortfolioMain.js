import React, { useRef, useState, useEffect } from 'react';
import JobSkills from './JobSkills';
import ProjectResponsive from './ProjectResponsive';
import ProjectReact from './ProjectReact';
import Blogs from './Blogs';

const PortfolioMain = () => {
  const [react, setReact] = useState(false);
  const [responsive, setResponsive] = useState(true);

  const reactRef = useRef(null);
  const responsiveRef = useRef(null);

  const reactHandler = () => {
    setReact(true);
    setResponsive(false);
    reactRef.current.classList.add('ToggleBtn');
    responsiveRef.current.classList.remove('ToggleBtn');
  };

  const responsiveHandler = (e) => {
    setResponsive(true);
    setReact(false);
    responsiveRef.current.classList.add('ToggleBtn');
    reactRef.current.classList.remove('ToggleBtn');
  };

  useEffect(() => {
    responsiveRef.current.classList.add('ToggleBtn');
  }, []);

  return (
    <>
      <main className='PortfolioMain'>
        <JobSkills />
        <div className='ProjectHeading'>
          <h3>Projects(6)</h3>
          <div className='ProjectToggle'>
            <button
              onClick={responsiveHandler}
              className='ProjectToggleBtn Reponsive'
              ref={responsiveRef}
            >
              Reponsive
            </button>

            <button
              onClick={reactHandler}
              className='ProjectToggleBtn React'
              ref={reactRef}
            >
              React
            </button>
          </div>
        </div>
        {react ? <ProjectReact /> : <ProjectResponsive />}
        <div className='ProjectHeading'>
          <h3>Blogs(1)</h3>
        </div>
        <Blogs />
      </main>
    </>
  );
};

export default PortfolioMain;
