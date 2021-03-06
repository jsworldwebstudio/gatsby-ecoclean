import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { PageHeader, Banner } from '../utils';
import Contact from '../components/globals/Contact';
import contactImg from '../images/bcg/connectBcg.jpeg';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`,`react`]} />
    <PageHeader img={ contactImg }>
    <Banner
      title="contact us"
      subtitle="let's discuss your cleaning service needs"
    />
    </PageHeader>
    <Contact />
  </Layout>
)
export default ContactPage
