// import React, { useState } from 'react';
// import video1 from '../assets/video1.mp4';
// import video2 from '../assets/video2.mp4';
// import video3 from '../assets/video3.mp4';
// import Video4 from '../assets/Video4.mp4';
// import Video5 from '../assets/Video5.mp4';
// import Video6 from '../assets/Video6.mp4';
// import video7 from '../assets/video7.mp4';

// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import Footer from './Footer';

// const videos = [video1, video2, video3, Video4, Video4, Video5, Video6, video7];

// const NavbarContainer = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background-color: #d7dadd; /* Light gray background */
//   padding: 1rem;
//   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//     position: relative;
//   }
// `;

// const Logo = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center; /* Center the logo */

//   @media (max-width: 768px) {
//     margin-bottom: 1rem;
//   }
// `;

// const LogoImage = styled.img`
//   height: 40px; /* Adjust the height of the logo */
// `;

// const NavLinks = styled.ul`
//   list-style: none;
//   display: flex;
//   gap: 1rem;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//     display: ${props => (props.show ? 'flex' : 'none')}; /* Toggle display */
//   }
// `;

// const NavLink = styled.li`
//   color: #333; /* Darker text color */
//   cursor: pointer;
//   transition: color 0.3s ease; /* Smooth color transition */

//   &:hover {
//     color: #ff4c4c; /* Red color on hover */
//   }
// `;

// const ToggleButton = styled.button`
//   display: none; /* Hide the button by default */
//   background: none;
//   border: none;
//   font-size: 1.5rem;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: block; /* Show the button on mobile devices */
//     position: absolute;
//     top: 1rem;
//     left: 1rem;
//   }
// `;

// const MarginPageContainer = styled.div`
//   padding: 20px;
//   text-align: center;
// `;

// const Heading = styled.h2`
//   font-size: 2rem;
//   margin-bottom: 20px;
// `;

// const VideoGrid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   gap: 20px;
// `;

// const VideoContainer = styled.div`
//   flex-basis: calc(33.33% - 40px); /* 33.33% for 3 videos per row with some margin */
//   box-sizing: border-box;
//   margin-bottom: 20px;
//   position: relative;
//   overflow: hidden;
//   border-radius: 10px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

//   @media (max-width: 768px) {
//     flex-basis: calc(50% - 40px); /* 50% for 2 videos per row with some margin */
//   }

//   @media (max-width: 480px) {
//     flex-basis: calc(100% - 40px); /* 100% for 1 video per row with some margin */
//   }

//   &:hover {
//     transform: scale(1.05); /* Scale up on hover */
//     transition: transform 0.3s ease;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
//   }
// `;

// const Video = styled.video`
//   width: 100%;
// `;

// const MarginPage = () => {
//   const [showNavLinks, setShowNavLinks] = useState(false);

//   const handleToggle = () => {
//     setShowNavLinks(!showNavLinks);
//   };

//   return (
//     <>
//       <NavbarContainer>
//         <ToggleButton onClick={handleToggle}>
//           ☰ {/* This is the hamburger icon */}
//         </ToggleButton>
//         <Logo>
//           <LogoImage src="https://saumiccraft.com/wp-content/uploads/2023/06/S-C-Logo-300x205.png" alt="MyApp Logo" />
//         </Logo>
//         <NavLinks show={showNavLinks}>
//           <Link to="/home">
//             <NavLink>Home</NavLink>
//           </Link>
//           <Link to="/about">
//             <NavLink>About us</NavLink>
//           </Link>
//           <Link to="/margins">
//             <NavLink>Margins</NavLink>
//           </Link>
//         </NavLinks>
//       </NavbarContainer>
//       <MarginPageContainer>
//         <Heading>Products Margins</Heading>
//         <VideoGrid>
//           {videos.map((videoSrc, index) => (
//             <VideoContainer key={index}>
//               <Video src={videoSrc} controls />
//             </VideoContainer>
//           ))}
//         </VideoGrid>
//       </MarginPageContainer>
//       <Footer/>
//     </>
//   );
// };

// export default MarginPage;



import React, { useState } from 'react';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import Video5 from '../assets/Video5.mp4';
import Video9 from '../assets/Video9.mp4';
import Video6 from '../assets/Video6.mp4';
import video7 from '../assets/video7.mp4';
import Video10 from "../assets/Video10.mp4";
import Video4 from "../assets/Video4.mp4";

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const videos = [video1, video2, video3,Video4, Video5, Video9, Video6, video7,Video10];

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d7dadd; /* Light gray background */
  padding: 1rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    position: relative;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Center the logo */

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const LogoImage = styled.img`
  height: 40px; /* Adjust the height of the logo */
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: ${props => (props.show ? 'flex' : 'none')}; /* Toggle display */
  }
`;

const NavLink = styled.li`
  color: #333; /* Darker text color */
  cursor: pointer;
  transition: color 0.3s ease; /* Smooth color transition */

  &:hover {
    color: #ff4c4c; /* Red color on hover */
  }
`;

const ToggleButton = styled.button`
  display: none; /* Hide the button by default */
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; /* Show the button on mobile devices */
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
`;

const MarginPageContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const VideoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

const VideoContainer = styled.div`
  flex-basis: calc(33.33% - 40px); /* 33.33% for 3 videos per row with some margin */
  box-sizing: border-box;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-basis: calc(50% - 40px); /* 50% for 2 videos per row with some margin */
  }

  @media (max-width: 480px) {
    flex-basis: calc(100% - 40px); /* 100% for 1 video per row with some margin */
  }

  &:hover {
    transform: scale(1.05); /* Scale up on hover */
    transition: transform 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
  }
`;

const Video = styled.video`
  width: 100%;
`;

const InstagramButton = styled.button`
  background-color: #405DE6;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #3b55c2;
  }
`;

const MarginPage = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const handleToggle = () => {
    setShowNavLinks(!showNavLinks);
  };

  const redirectToInstagram = () => {
    window.open('https://www.instagram.com/saumic_craft_/', '_blank'); // Replace with your Instagram URL
  };

  return (
    <>
      <NavbarContainer>
        <ToggleButton onClick={handleToggle}>
          ☰ {/* This is the hamburger icon */}
        </ToggleButton>
        <Logo>
          <LogoImage src="https://saumiccraft.com/wp-content/uploads/2023/06/S-C-Logo-300x205.png" alt="MyApp Logo" />
        </Logo>
        <NavLinks show={showNavLinks}>
          <Link to="/home">
            <NavLink>Home</NavLink>
          </Link>
          <Link to="/about">
            <NavLink>About us</NavLink>
          </Link>
          <Link to="/margins">
            <NavLink>Margins</NavLink>
          </Link>
          <Link to="/login">
            <NavLink>Dashboard</NavLink>
          </Link>
         

        </NavLinks>
      </NavbarContainer>
      <MarginPageContainer>
        <Heading>Products Margins</Heading>
        <VideoGrid>
          {videos.map((videoSrc, index) => (
            <VideoContainer key={index}>
              <Video src={videoSrc} controls />
            </VideoContainer>
          ))}
        </VideoGrid>
        <InstagramButton onClick={redirectToInstagram}>View on Instagram</InstagramButton>
      </MarginPageContainer>
      <Footer/>
    </>
  );
};

export default MarginPage;
