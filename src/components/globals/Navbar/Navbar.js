import React, { Component } from 'react';
import NavbarHeader from './NavbarHeader';
import NavbarLinks from './NavbarLinks';
import NavbarIcons from './NavbarIcons';
import styled from 'styled-components';

class Navbar extends Component {
  state= {
    navbarOpen: false
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    return (
      <NavWrapper>
        <NavbarHeader
          handleNavbar={this.handleNavbar}
        />
        <NavbarLinks
          navbarOpen={this.state.navbarOpen}
        />
        <NavbarIcons />
      </NavWrapper>
    )
  }
}

export default Navbar;

const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`
