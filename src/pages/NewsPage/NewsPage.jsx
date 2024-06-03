import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import newsImg from "../../assets/newsImg.jpg";
import styles from "./NewsPage.module.scss";

const NewsPage = () => {
  return (
    <>
      <Header />

      <div className={styles.news}>
        <img
          src={newsImg}
          alt="A man with with Ar"
          className={styles.news_img}
        />
        <p className={styles.news_title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          debitis temporibus enim eius autem at. Rerum nobis cupiditate ipsam,
          culpa perspiciatis eaque quibusdam porro reprehenderit corporis
          dolores quia eos ullam maxime dignissimos enim modi, fuga molestias
          illum iure? Consequuntur repudiandae eos, ratione quae qui eum. Labore
          voluptatibus natus ea tenetur. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Minus recusandae voluptates quas quaerat
          reprehenderit saepe, ducimus nostrum deleniti temporibus iusto,
          blanditiis perspiciatis fugit voluptatum quae! Fugiat maxime
          doloremque, corporis voluptate incidunt molestias quo nemo, mollitia
          ab, unde exercitationem consectetur dignissimos sunt repudiandae
          ratione assumenda dolorem? Numquam delectus unde dignissimos animi.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default NewsPage;
