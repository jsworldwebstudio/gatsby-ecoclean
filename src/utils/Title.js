import React from 'react'
import styled from 'styled-components'
import { styles } from '.'
const Title = ({ title, message }) => (
  <TitleWrapper>
    <h3>{message}</h3>
    <h1>{title}</h1>
    <div className="underline" />
  </TitleWrapper>
);
Title.defaultProps = {
  message: 'our message',
  title: 'our title',
};

const TitleWrapper = styled.div`
  text-align: center;
  h3 {
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: '0.3rem' })};
    font-size: 2rem;
    color: ${styles.colors.mainGreen};
  }
  h1 {
    ${styles.letterSpacing({ spacing: '0.3rem' })};
    font-size: 2rem;
    text-transform: uppercase;
  }
  .underline {
    width: 5rem;
    height: 0.2rem;
    background: ${styles.colors.mainGreen};
    margin: 0.5rem auto;
  }
`

export default Title;
