import React, { Component } from 'react';
import { TitleNew } from '../../../utils';
import styles from '../../../css/services.module.css';
import { Link } from 'gatsby';
import { FaBed, FaHome, FaBath, FaUtensils } from 'react-icons/fa';

class Services extends Component {

  state={
    services:[
      {
        id: 0,
        icon: <FaUtensils className="icon utensils-icon" />,
        title: 'Kitchen'
      },
      {
        id: 1,
        icon: <FaBath className="icon bath-icon" />,
        title: 'Bathroom'
      },
      {
        id: 2,
        icon: <FaBed className="icon bed-icon" />,
        title: 'Bedroom'
      },
      {
        id: 3,
        icon: <FaHome className="icon home-icon" />,
        title: 'Entire House'
      },
    ]
  };

  render() {
    return (
      <section className={styles.services}>
        <TitleNew title="our" subtitle="services" />
        <p className={styles.description}>
          <span>Conscious Eco Clean will create a personalized cleaning plan for you tailored to the following areas of your home.</span>
        </p>
        <div className={styles.center}>
        {
          this.state.services.map((item) => {
            return (
              <article key={item.id} className={styles.service}>
                <span>{item.icon}</span>
                <h4>{item.title}</h4>
              </article>
            )
          })
        }
        </div>
        <Link to="/services">
          <button type="button" className="btn-primary">more services info</button>
        </Link>
      </section>
    )
  }
}

export default Services;