import React from 'react';
import BlogImage1 from '../../images/blogImage1.jpeg';

const Blogs = () => {
  return (
    <div className='BlogsContainer'>
      <div className='BlogDetails'>
        <h4 className='BlogHeading'>Blog</h4>
        <h3 className='BlogTitle'>How to organize your CSS</h3>
        <p className='BlogText'>
          In this article I tell the story about Proin eu justo sit amet lacus
          bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.
        </p>
        <p className='BlogText'>
          Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
          feugiat malesuada molestie.
        </p>

        <button className='BlogLinkBtn'>dev.to</button>
      </div>
      <img className='BlogImage' src={BlogImage1} alt='blog' />
    </div>
  );
};

export default Blogs;
