import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "gatsby"
import { styles } from '../../utils';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

class Footer extends Component {

  state={
    links:[
      {
        id: 0,
        path: '/',
        name: 'home'
      },
      {
        id: 1,
        path: '/services',
        name: 'services'
      },
      {
        id: 2,
        path: '/about',
        name: 'about'
      },
      {
        id: 3,
        path: '/contact',
        name: 'contact'
      },
      {
        id: 4,
        path: '/service-areas',
        name: 'service areas'
      }
    ],
    icons:[
      {
        id: 0,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: 'https://www.facebook.com'
      },
      {
        id: 1,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: 'https://www.twitter.com'
      },
      {
        id: 2,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: 'https://www.instagram.com'
      },
    ]
  };

  render() {
    return (
      <FooterWrapper>
        {/*<div className="title">ecoclean</div>*/}
        <div className="links">
          {this.state.links.map(item => {
            return (
              <Link key={item.id} to={item.path}>
                {item.name}
              </Link>
            )
          })}
        </div>
        <div className="icons">
          {this.state.icons.map(item => (
            <a
              key={item.id}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="copyright">copyright &copy; {new Date().getFullYear()} Conscious Eco Clean LLC. All Rights Reserved</p>
      </FooterWrapper>
    )
  }
};

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background:${styles.colors.mainBlack};
  .icons {
    width: 10rem;
    display: flex;
    justify-content:space-between;
    margin: 1rem auto;
  }
  .links {
    width: 40rem;
    display: flex;
    justify-content:space-between;
    margin:0 auto;
  }
  .icon {
    color:${styles.colors.mainWhite};
    font-size: 1.3rem;
    ${styles.transition({})};
    &:hover {
    color: ${styles.colors.mainGreen};
    }
  }
  .copyright{
    color:${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
  .title {
    text-align: center;
    width: 10rem;
    color: ${styles.colors.mainGreen};
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.5rem;
    ${styles.border({color: `${styles.colors.mainGreen}` })};
  }
  .links a {
    /* display: inline-block; */
    display: flex;
    text-decoration: none;
    text-transform: uppercase;
    color: ${styles.colors.mainWhite};
    margin: 0.5rem 1rem;
    ${styles.letterSpacing({ spacing: '0.1rem' })};
    ${styles.transFunction()};
    /* font-weight: bold; */
  }
  .links a:hover {
    color: ${styles.colors.mainGreen};
  }
  /* .links {
    display: none;
  } */
  @media (min-width: 768px){
    /* .links {
      display: block;
    }; */
  };
`

export default Footer;