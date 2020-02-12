import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { PageHeader, Banner, TitleNew } from '../utils';
import aboutImg from '../images/bcg/maid-hands-with-cleaning-tools.jpg';

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`,`react`]} />
    <PageHeader img={ aboutImg }>
    <Banner
      title="about us"
      subtitle="a little about us"
    />
    </PageHeader>
    <AboutWrapper>
      <TitleNew title="our" subtitle="background" />
      <p>
        <span>Conscious Eco Clean LLC. is an eco conscious cleaning company that was established in 2018.</span>
        <span> Our company is rooted through a passion for the world, people and self-ownership.</span>
        <span> Our experience comes from employment with other self-owned cleaning service companies.</span>
        <span> Through this employment we were mentored and encouraged to develop a concept of our own.</span>
        <span> We received extensive training and knowledge that drives our confidence that we will be successful.</span>
        <span> We allow ourselves to become vulnerable to our passion which drives our quality of work.</span>
        <span> Thank you for being a very intricate part of our services and our lives.</span>
      </p>
    </AboutWrapper>
    <AboutWrapper>
      <TitleNew title="our" subtitle="mission" />
      <p>
        <span>Our mission at Conscious Eco Clean LLC. is to provide a trustworthy, thorough, customizable cleaning experience for your home or office.</span>
        <span> We strive to provide comfort and ultimate satisfaction while continuing to do our part and be conscious of our environment.</span>
        <span> We are passionate about the service we provide and the lives we touch.</span>
      </p>
    </AboutWrapper>
  </Layout>
);

const AboutWrapper = styled.article`
  margin-top: 1rem;
  p {
    font-size: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`

export default AboutPage
