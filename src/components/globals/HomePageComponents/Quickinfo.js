import React from 'react';
import { Section, Title, SectionButton, styles } from '../../../utils';
import styled from 'styled-components';
import { Link } from 'gatsby';

const QuickInfo = () => (
  <Section>
    <Title message="let us tell you" title="our mission" />
    <QuickInfoWrapper>
      <p className="text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eligendi id reprehenderit at animi vel non voluptatibus officiis facere, velit hic exercitationem quaerat, fuga necessitatibus. Aliquid impedit reprehenderit, beatae veniam, deserunt aspernatur illo animi ratione assumenda libero tenetur ex molestiae distinctio repellat similique cumque nihil perspiciatis pariatur nesciunt, optio neque.
      </p>
      <Link to="/about" style={{ textDecoration: 'none' }}>
        <SectionButton style={{ margin: '2rem auto' }}>about</SectionButton>
      </Link>
    </QuickInfoWrapper>
  </Section>
);

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  };
  @media (min-width: 768px){
    width: 70%;
  };
  @media (min-width: 992px){
    width: 60%;
  };
`

export default QuickInfo;