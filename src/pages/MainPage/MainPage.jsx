import React from "react";
import Header from "../../components/Header/Header";
import mainImg from "../../assets/mainImg.jpg";

const MainPage = () => {
  return (
    <div>
      <Header />

      <img src={mainImg} alt="AR image" />
    </div>
  );
};

export default MainPage;
