import React from 'react';

function HobbyLinks() {
  const hobbyLinks = [
    'https://www.goodreads.com', 
    'https://www.doyogawithme.com',
    'https://letterboxd.com'
  ];

  return (
    <div>
      <a href={hobbyLinks[0]} target="_blank" rel="noopener noreferrer">Visit Goodreads</a><br />
      <a href={hobbyLinks[1]} target="_blank" rel="noopener noreferrer">Visit Do Yoga With Me</a><br />
      <a href={hobbyLinks[2]} target="_blank" rel="noopener noreferrer">Visit Letterboxd</a>
    </div>
  );
}

export default HobbyLinks;
