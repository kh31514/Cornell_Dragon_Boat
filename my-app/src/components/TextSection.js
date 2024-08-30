import React from 'react';
import '../styles/TextSection.css';

const TextSection = ({ title, body, bkgrnd, imgPos, imgSrc }) => {
  return (
    <div className={`container ${imgPos} ${bkgrnd}`}>
      <img src={imgSrc}></img>
      <div className="text-container">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default TextSection;