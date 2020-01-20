import React from 'react';
import { TitleNew } from '../../../utils';
import styles from '../../../css/about.module.css';
import { Link } from 'gatsby';
import img from '../../../images/bcg/cleaning-services-page-header.jpg';

const About = () => (
  <section className={styles.about}>
    <TitleNew title="about" subtitle="us" />
    <div className={styles.aboutCenter}>
      <article className={styles.aboutImg}>
        <div className={styles.imgContainer}>
          <img src={img} alt="about company" />
        </div>
      </article>
      <article className={styles.aboutInfo}>
        <h4>explore the difference</h4>
        <p>
          <span>Welcome to Conscious Eco Clean LLC. We are a brand new "eco conscious" cleaning company.</span>
          <span> Here at Conscious Eco Clean, we strive to develop a personalized cleaning plan in collaboration with each customer to effectively and efficiently meet your cleaning needs.</span>
        </p>
        <Link to="/about">
          <button type="button" className="btn-primary">read more</button>
        </Link>
      </article>
    </div>
  </section>
);

export default About;