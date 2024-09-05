import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d7dadd; /* Light gray background */
  padding: 1rem 2rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

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
  height: 50px;
  margin-right: 1rem;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: ${props => (props.show ? 'flex' : 'none')}; /* Toggle display */
  }
`;

const NavLinkItem = styled.li`
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ff4c4c;
    transform: scale(1.1);
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
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

const AboutUsContainer = styled.section`
  padding: 3rem 2rem;
  background-color: #f9f9f9;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  color: #333;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const AboutMission = styled.div`
  max-width: 800px;
  text-align: center;
  background: #fff;
  padding: 2rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.6;
  }
`;

const AboutVideo = styled.div`
  max-width: 800px;
  text-align: center;
  background: #fff;
  padding: 2rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #333;
  }

  video {
    width: 100%;
    max-height: 400px;
    border-radius: 10px;
  }
`;

const AboutUs = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const handleToggle = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <div>
      <NavbarContainer>
        <ToggleButton onClick={handleToggle}>
          ☰ {/* This is the hamburger icon */}
        </ToggleButton>
        <Logo>
          <LogoImage src="https://saumiccraft.com/wp-content/uploads/2023/06/S-C-Logo-300x205.png" alt="MyApp Logo" />
        </Logo>
        <NavLinks show={showNavLinks}>
          <NavLink to="/home" onClick={handleToggle}>
            <NavLinkItem>Home</NavLinkItem>
          </NavLink>
          <NavLink to="/margins" onClick={handleToggle}>
            <NavLinkItem>Margins</NavLinkItem>
          </NavLink>
          <NavLink to="/about" onClick={handleToggle}>
            <NavLinkItem>About us</NavLinkItem>
          </NavLink>
          <NavLink to="/login">Dashboard</NavLink>

        </NavLinks>
      </NavbarContainer>

      <AboutUsContainer>
        <AboutHeader>
          <h2>About Us</h2>
          <p>Discover the story behind Saumic Craft</p>
        </AboutHeader>

        <AboutContent>
          <AboutMission>
            <h3>Who We Are</h3>
            <p>We Are Handicrafts Manufacturing company based in Jaipur Rajasthan . Our Brand <a href="https://reviews.saumic.com/">Saumic Craft</a> is  Best Seller Brand On Amazon ( 10CR TURNOVER  ) , We have 85,000+ SKU . We are Bulk Exporter of our Handicraft  products and also provide products to our enrolled seller with no Moq  ( Minimum Order Quantity ) policies. Saumic Craft is trademark registered company under Government of Inda Trademark Act  1999 . </p>
          </AboutMission>

          <AboutVideo>
            <h3>Our Vision</h3>
            <video controls>
              <source src="https://gallery.saumiccraft.com/wp-content/uploads/2024/05/0507-3.mp4" type="video/mp4" />
              Your browser does not support the video.
            </video>
          </AboutVideo>
        </AboutContent>
      </AboutUsContainer>
      <Footer/>
    </div>
  );
};

export default AboutUs;



