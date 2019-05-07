import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = ({ signedIn }) => (
  <Container>
    <PullLeft>
      <Link to="/"><i className="fa fa-home"></i> Home</Link>
    </PullLeft>
    <PullRight>
      <Link to="/rentout"><i className="fa fa-car"></i> Rent Out</Link>
      <Link to="/booking/find"><i className="fa fa-search"></i> Find Booking</Link>
      <Link to="/profile"><i className="fa fa-user"></i> Profile</Link>
      <Link to="/signup"><i className="fa fa-user-plus"></i> Register</Link>
      <Link to="/signin"><i className="fa fa-sign-in-alt"></i> Sign In</Link>
    </PullRight>
  </Container>
);

const Container = styled.div`
  position: relative;
  display: block;
  min-width: 100%; max-width: 100%;
  min-height: 3rem; max-height: 3rem;
  background-color: black;
  z-index: 1;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%; max-height: 100%;
  padding: 0 0.5rem;
`;

const PullLeft = styled(LinkContainer)`
  position: absolute; left: 0;
`;

const PullRight = styled(LinkContainer)`
  position: absolute; right: 0;
`;

const Link = styled(RouteLink)`
  display: inline-block;
  margin: 0 0.5rem;
  font-size: 120%;
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: none;
    color: white;
  }
`;

export default Navigation;
