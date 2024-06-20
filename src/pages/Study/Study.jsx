import React from "react";
import Header from "../../components/Header/Header";
import st1 from "../../assets/st1.png";
import st2 from "../../assets/st2.png";
import st3 from "../../assets/st3.png";
import st4 from "../../assets/st4.png";
import st5 from "../../assets/st5.png";
import st6 from "../../assets/st6.png";
import st7 from "../../assets/st7.png";
import st8 from "../../assets/st8.png";
import calendar from "../../assets/calendar.png";
import { InterDate } from "../Internship/Internship";
import { PagesNav } from "../Home/Home";
import Footer from "../../components/Footer/Footer";

const StudyCardsTitle = () => (
  <div className="fam-title">
    <h2>Исследования</h2>
  </div>
);

const studyImages = [
  st1,
  st2,
  st3,
  st4,
  st5,
  st6,
  st7,
  st8,
  st1,
  st2,
  st3,
  st4,
  st5,
  st6,
  st7,
  st8,
];

const StudyCards = () => (
  <div className="fc">
    {studyImages.map((item, index) => (
      <div key={index} className="fc-bot-cards">
        <div className="fc-bc-top">
          <img src={item} alt="" />
        </div>
        <div className="fc-bc-bot">
          <div className="date-st">
            <InterDate />
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

function Study() {
  return (
    <>
      <Header />
      <div className="st-cards-title">
        <StudyCardsTitle />
      </div>
      <StudyCards />
      <div className="navPages">
        <PagesNav />
      </div>
      <Footer />
    </>
  );
}

export default Study;
