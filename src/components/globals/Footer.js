import React, { Component } from 'react';
import styled from 'styled-components';
import { styles } from '../../utils';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

class Footer extends Component {

  state={
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
    ],
    fullYear: new Date()
  };

  render() {
    return (
      <FooterWrapper>
        <div className="title">ecoclean</div>
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
        <p className="copyright">copyright &copy; {`${this.state.fullYear.getFullYear()}`} Conscious Ecoclean</p>
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
  .title{
    text-align: center;
    width: 10rem;
    color: ${styles.colors.mainGreen};
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.5rem;
    ${styles.border({color: `${styles.colors.mainGreen}` })};
  }
`

export default Footer;
