import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { HomeHeader, Banner } from '../utils';
import homeImg from '../images/bcg/how-to-hire-a-cleaning-service.jpg';
import About from '../components/globals/HomePageComponents/About';
import Services from '../components/globals/HomePageComponents/Services';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`,`react`]} />
    <HomeHeader img={ homeImg }>
      <Banner
        title="Conscious Eco Clean"
        subtitle="A residential cleaning company servicing the Denver Colorado metro area"
        companyMoto="Eco Conscious cleaning services personalized for you!"
      >
      </Banner>
    </HomeHeader>
    <About />
    <Services />
  </Layout>
)
export default IndexPage
