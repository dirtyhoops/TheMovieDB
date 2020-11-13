import React from 'react';
import './MoreButton.css';

const MoreButton = props => {
  return (
    <div className='wrapper-morebutton'>
      <button onClick={props.onClick}>Load More Movies</button>
    </div>
  );
};

export default MoreButton;
