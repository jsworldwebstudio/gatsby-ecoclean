import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { HomeHeader, Banner, BannerButton } from '../utils';
import homeImg from '../images/bcg/how-to-hire-a-cleaning-service.jpg';
import QuickInfo from '../components/globals/HomePageComponents/Quickinfo';
import Gallery from '../components/globals/HomePageComponents/Gallery';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`,`react`]} />
    <HomeHeader img={ homeImg }>
      <Banner
        title="Conscious Ecoclean"
        subtitle="A residential cleaning company servicing the Denver, Colorado metro area"
      >
        <BannerButton style={{ margin:'2rem auto' }}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
  </Layout>
)
export default IndexPage
