import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { PageHeader, Banner } from '../utils';
import serviceAreaImg from '../images/bcg/deep-cleaning-floor.jpg';

const ServiceAreasPage = () => (
  <Layout>
    <SEO title="Services" keywords={[`gatsby`, `application`,`react`]} />
    <PageHeader img={ serviceAreaImg }>
    <Banner
      title="service areas"
      subtitle="the denver colorado metro areas we cover"
    />
    </PageHeader>
  </Layout>
);

export default ServiceAreasPage;