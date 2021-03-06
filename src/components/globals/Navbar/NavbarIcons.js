import React, { Component } from 'react';
import styled from 'styled-components';
import { styles }  from '../../../utils';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

class NavbarIcons extends Component {

  state={
    icons:[
      {
        id: 0,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: 'https://www.facebook.com/consciosecoclean'
      },
      {
        id: 1,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: 'https://www.twitter.com'
      },
      {
        id: 2,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: 'https://www.instagram.com/consciousecoclean'
      },
    ]
  };

  render() {
    return (
      <IconWrapper>
        {
          this.state.icons.map(item => {
            return ( 
              <a
                key={item.id}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })
        }
      </IconWrapper>
    )
  }
};

export default NavbarIcons;

const IconWrapper = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transFunction()};
  };
  .facebook-icon {
    /* color: #3b579d; */
    color: ${styles.colors.mainGreen};
  };
  .twitter-icon {
    /* color: #3ab7f0; */
    color: ${styles.colors.mainGreen};
  };
  .instagram-icon {
    /* color: #da5f53; */
    color: ${styles.colors.mainGreen};
  };
  .icon:hover {
    color: ${styles.colors.mainBlack};
    transform: translateY(-5px);
  };
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  };
`