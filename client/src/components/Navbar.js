import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReviewPage from './ReviewPage';
import CustomerFeedback from './CustomerFeedback';
import CaseStudyPage from './CaseStudy';
import Footer from './Footer';
import Review from './Review';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d7dadd; /* Light gray background */
  padding: 1rem;
  position: fixed
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
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

const NavLink = styled(Link)`
  color: #333; /* Darker text color */
  text-decoration: none; /* Remove underline */
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

const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const handleToggle = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <>
      <NavbarContainer>
        <Logo>
          <LogoImage src="https://saumiccraft.com/wp-content/uploads/2023/06/S-C-Logo-300x205.png" alt="MyApp Logo" />
        </Logo>
        <ToggleButton onClick={handleToggle}>
          ☰ {/* This is the hamburger icon */}
        </ToggleButton>
        <NavLinks show={showNavLinks}>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/margins">Margins</NavLink>
          <NavLink to="/login">Dashboard</NavLink>

        </NavLinks>
      </NavbarContainer>
      <ReviewPage />
      <CustomerFeedback />
      <CaseStudyPage />
      <h1>Review Us</h1>
      <Review/>
      <Footer />
    </>
  );
};

export default Navbar;




