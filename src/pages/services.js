import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { PageHeader, Banner, TitleNew } from '../utils';
import servicesImg from '../images/bcg/cleaning-services-page-header.jpg';

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" keywords={[`gatsby`, `application`,`react`]} />
    <PageHeader img={ servicesImg }>
    <Banner
      title="services we offer"
      subtitle="learn the cleaning services we offer"
    />
    </PageHeader>
    <ServicesWrapper>
      <TitleNew title="our" subtitle="services" />
      <p>
        <span>Welcome to Conscious Eco Clean LLC., we are a newly established "eco - conscious" cleaning company.</span>
        <span> Here at Conscious Eco Clean LLC., we strive to develop a personalized cleaning plan in collaboration with each homeowner or businessowner to effectively and efficiently meet your cleaning needs.</span>
      </p>
      <p>
        <span>Each personalized cleaning plan will include these services per room (unless previously noted otherwise):</span>
      </p>
      <p>
        <span>Kitchen:</span>
      </p>
      <ul>
        <li>Clean cabinet fronts</li>
        <li>Clean stove top and exterior</li>
        <li>Clean sink</li>
        <li>Polish all knobs</li>
        <li>Clean microwave inside and out</li>
        <li>Dust all surfaces</li>
        <li>Clean countertops</li>
        <li>Wipe and clean all appliances</li>
        <li>Wipe accesible trash cans</li>
        <li>Sweep and mop floor</li>
      </ul>
      <p>
        <span>Bathroom:</span>
      </p>
      <ul>
        <li>Clean tub and shower</li>
        <li>Clean toilet and base</li>
        <li>Clean countertops</li>
        <li>Dust exposed surfaces</li>
        <li>Clean mirrors</li>
        <li>Hand wash floors</li>
        <li>Vacuum</li>
      </ul>
      <p>
        <span>Bedroom:</span>
      </p>
      <ul>
        <li>Stage bed and pillow</li>
        <li>Dust all surfaces</li>
        <li>Vacuum floor</li>
      </ul>
      <p>
        <span>Entire Home or Business:</span>
      </p>
      <ul>
        <li>Dust all surfaces</li>
        <li>Vacuum floor and furniture</li>
        <li>Clean door handles and light switches</li>
        <li>Clean mirrors</li>
        <li>Mop hard floors</li>
        <li>Staging</li>
      </ul>
    </ServicesWrapper>
  </Layout>
);

const ServicesWrapper = styled.article`
  margin-top: 1rem;
  p {
    font-size: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  ul {
    font-size: 1rem;
    margin: 0 1rem 1rem 3rem;
  }
`

export default ServicesPage;

