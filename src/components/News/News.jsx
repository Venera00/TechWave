import React from "react";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import styles from "./News.module.scss";

const News = () => {
  return (
    <Element name="news">
      <h3 className={styles.news_title}>Our news</h3>

      <Link to="/news">
        <li className={styles.news_subtitle}>Lorem ipsum dolor sit amet.</li>
      </Link>
      <Link to="/news">
        <li className={styles.news_subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsam
          inventore maxime animi eos!
        </li>
      </Link>
      <Link to="/news">
        <li className={styles.news_subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsam
          inventore maxime animi eos!
        </li>
      </Link>
    </Element>
  );
};

export default News;
