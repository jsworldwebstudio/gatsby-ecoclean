import React from 'react';
import { TitleNew } from '../../utils';
import styles from '../../css/contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <TitleNew title="contact" subtitle="us" />
      <div className={styles.center}>
        <form action="https://formspree.io/slaughterb@consciousecoclean.com" method="POST" className={styles.form}>
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="Your Name Here"
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="YourEmail@email.com"
            />
          </div>
          <div>
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="Contact Message"
            />
          </div>
          <div>
            <input
              type="submit"
              value="submit email"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  )
};

export default Contact;
