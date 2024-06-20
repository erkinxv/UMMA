import React from "react";
import family7 from "../../assets/family7.png";
import family8 from "../../assets/family8.png";
import family9 from "../../assets/family9.png";
import family10 from "../../assets/family10.png";
import family11 from "../../assets/family11.png";
import family12 from "../../assets/family12.png";
import family13 from "../../assets/family13.png";
import family14 from "../../assets/family14.png";
import Header from "../../components/Header/Header";
import calendar from "../../assets/calendar.png";
import Footer from "../../components/Footer/Footer";
import { PagesNav } from "../Home/Home";

const familyImagesBot = [
  family7,
  family8,
  family9,
  family10,
  family11,
  family12,
  family13,
  family14,
  family7,
  family8,
  family9,
  family10,
  family11,
  family12,
  family13,
  family14,
];

const FamilyCardsTitle = () => (
  <div className="fam-title">
    <h2>Семья</h2>
  </div>
);

const FamilyCards = () => (
  <div className="fc">
    {familyImagesBot.map((item, index) => (
      <div key={index} className="fc-bot-cards">
        <div className="fc-bc-top">
          <img src={item} alt="" />
        </div>
        <div className="fc-bc-bot">
          <div className="cont-box-date">
            <img
              src={calendar}
              alt="Date"
              style={{ width: "15px", height: "15px" }}
            />
            <p>ЧТ, 19 мая, 2022</p>
          </div>
          <p>
            Отец Димитрий о нападках Запада на Россию: "Это давняя борьба тьмы
            со светом"
          </p>
        </div>
      </div>
    ))}
  </div>
);

function Family() {
  return (
    <>
      <Header />
      <FamilyCardsTitle />
      <FamilyCards />
      <div className="navPages">
        <PagesNav />
      </div>
      <Footer />
    </>
  );
}

export default Family;
