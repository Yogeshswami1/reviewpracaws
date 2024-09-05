import React from 'react';
import CS1 from "../assets/CS1.mp4";
import CS2 from "../assets/CS2.mp4";
import CS3 from "../assets/CS3.mp4";

const Prac = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '20px'
  };

  const videoStyle = {
    width: '30%',
    maxWidth: '300px',
    height: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    transition: 'transform 0.3s'
  };

  const videoHoverStyle = {
    transform: 'scale(1.05)'
  };

  return (
    <>
    <h1>Case Study</h1>
    <div style={containerStyle}>
       
      <video style={videoStyle} src={CS1} controls 
        onMouseOver={e => e.currentTarget.style.transform = videoHoverStyle.transform}
        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      ></video>
      <video style={videoStyle} src={CS2} controls 
        onMouseOver={e => e.currentTarget.style.transform = videoHoverStyle.transform}
        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      ></video>
      <video style={videoStyle} src={CS3} controls 
        onMouseOver={e => e.currentTarget.style.transform = videoHoverStyle.transform}
        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      ></video>
    </div>
    </>
  );
};

export default Prac;
