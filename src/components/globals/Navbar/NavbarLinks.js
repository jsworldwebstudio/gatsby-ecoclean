import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { styles }  from '../../../utils';

class NavbarLinks extends Component {

  state={
    links:[
      {
        id: 0,
        path: '/',
        name: 'home'
      },
      {
        id: 1,
        path: '/cleaning-services',
        name: 'cleaning services'
      },
      {
        id: 2,
        path: '/testamonials',
        name: 'testamonials'
      },
      {
        id: 3,
        path: '/about',
        name: 'about'
      },
      {
        id: 4,
        path: '/contact',
        name: 'contact'
      }
    ]
  };

  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {
          this.state.links.map(item => {
            return(
              <li key={item.id}>
                <Link to={item.path} className="nav-link">
                  {item.name}
                </Link>
              </li>
            )
          })
        }
      </LinkWrapper>
    )
  }
};

export default NavbarLinks;

const LinkWrapper = styled.ul`
li {
  list-style-type: none;
}
.nav-link {
  display: block;
  text-decoration: none;
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: ${styles.colors.mainGrey};
  font-weight: 700;
  text-transform: capitalize;
  cursor: pointer;
  ${styles.transDefault};
  &:hover {
    background: ${styles.colors.mainGrey};
    color: ${styles.colors.mainGreen};
    padding: 0.5rem 1rem 0.5rem 1.3rem;
  };
};
height: ${props => (props.open? '172px': '0px') };
overflow: hidden;
${styles.transObject({ time: '1s' })};
@media (min-width: 768px){
  height: auto;
  display: flex;
  margin: 0 auto;
  .nav-link:hover {
    background: ${styles.colors.mainWhite};
    padding: 0.5rem 1rem 0.5rem 1rem;
  };
};
`
