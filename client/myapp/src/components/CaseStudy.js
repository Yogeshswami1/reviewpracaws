import React from 'react';
import CS1 from "../assets/CS1.mp4";
import CS2 from "../assets/CS2.mp4";
import CS3 from "../assets/CS3.mp4";
import CS4 from "../assets/CS4.mp4";

const CaseStudyPage = () => {
  // Inline styles
  const sectionStyle = {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const videoContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  };

  const videoStyle = {
    flex: '1 1 calc(50% - 20px)',
    maxWidth: 'calc(50% - 20px)',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'transform 0.3s',
  };

  const videoElementStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  };

  // Adding a hover effect using a function
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <section style={sectionStyle}>
      <h1>Case Study</h1>
      <div style={videoContainerStyle}>
        {/* Video 1 */}
        <div
          style={videoStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video controls style={videoElementStyle}>
            <source src={CS1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Video 2 */}
        <div
          style={videoStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video controls style={videoElementStyle}>
            <source src={CS2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Video 3 */}
        <div
          style={videoStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video controls style={videoElementStyle}>
            <source src={CS3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          style={videoStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video controls style={videoElementStyle}>
            <source src={CS4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* Add more videos as needed */}
      </div>
    </section>
  );
};

export default CaseStudyPage;
