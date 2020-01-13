import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { PageHeader, Banner } from '../utils';
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
  </Layout>
);

export default ServicesPage;

