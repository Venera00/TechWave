import React from "react";
import { Element } from "react-scroll";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <Element name="contacts">
      <div className={styles.footer}>
        <div className={styles.contact_section}>
          <p>Contacts</p>
          <p>+9173875436</p>
          <p>techwave@gmail.com</p>
        </div>
        <div className={styles.footer_section}>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
        </div>
        <div className={styles.footer_section}>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
        </div>
        <div className={styles.footer_section}>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
        </div>
        <div className={styles.footer_section}>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
          <a href="#">Lorem</a>
        </div>
      </div>
    </Element>
  );
};

export default Footer;
