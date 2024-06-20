import React from "react";
import lec1 from "../../assets/lec1.png";
import lec2 from "../../assets/lec2.png";
import lec3 from "../../assets/lec3.png";
import lec4 from "../../assets/lec4.png";
import Header from "../../components/Header/Header";
import { PagesNav } from "../Home/Home";
import Footer from "../../components/Footer/Footer";

const lectures = [
  {
    title:
      "Новый дух эпохи: от мольберта к станку. Образ СССР на Всемирных выставках",
    paragraph:
      "Начало ХХ века было ознаменовано крупнейшим событием — Всемирную...",
    date: "06/09/23",
    time: "13:00 - 15:00 PM",
    location: "г.Бишкек, Московская 25",
    image: lec1,
  },
  {
    title:
      "Новый дух эпохи: от мольберта к станку. Образ СССР на Всемирных выставках",
    paragraph:
      "Начало ХХ века было ознаменовано крупнейшим событием — Всемирную...",
    date: "06/09/23",
    time: "13:00 - 15:00 PM",
    location: "г.Бишкек, Московская 25",
    image: lec2,
  },
  {
    title:
      "Новый дух эпохи: от мольберта к станку. Образ СССР на Всемирных выставках",
    paragraph:
      "Начало ХХ века было ознаменовано крупнейшим событием — Всемирную...",
    date: "06/09/23",
    time: "13:00 - 15:00 PM",
    location: "г.Бишкек, Московская 25",
    image: lec3,
  },
  {
    title:
      "Новый дух эпохи: от мольберта к станку. Образ СССР на Всемирных выставках",
    paragraph:
      "Начало ХХ века было ознаменовано крупнейшим событием — Всемирную...",
    date: "06/09/23",
    time: "13:00 - 15:00 PM",
    location: "г.Бишкек, Московская 25",
    image: lec4,
  },
];

const LecTitle = () => (
  <div className="container">
    <h2 className="main-title">Лекции и семинары</h2>
    <div className="filters">
      <div className="filter-buttons">
        <button className="active">Все</button>
        <button>Религия</button>
        <button>Политика</button>
        <button>Семья</button>
        <button>Общество</button>
      </div>
      <div className="filter-dates">
        <span>Дата</span>
        <p>От</p>
        <input type="date" />
        <p>До</p>
        <input type="date" />
      </div>
    </div>
  </div>
);

const Lecture = () => (
  <div className="lec-containers">
    {lectures.map((item) => (
      <div className="lec-box">
        <div className="lb-left">
          <img src={item.image} alt="" />
        </div>
        <div className="lb-right">
          <h4>{item.title}</h4>
          <p>{item.paragraph}</p>
          <p>{item.location}</p>
          <p>{item.time}</p>
        </div>
      </div>
    ))}
  </div>
);

const SeminarsTitle = () => (
  <div className="sem-title">
    <h2>Семинары</h2>
  </div>
);

const EventsTitle = () => (
  <div className="sem-title">
    <h2>События</h2>
  </div>
);

function Lectures() {
  return (
    <>
      <Header />
      <LecTitle />
      <Lecture />
      <div className="navPagesLec">
        <PagesNav />
      </div>
      <div className="seminars">
        <SeminarsTitle />
        <Lecture />
        <div className="navPagesLec">
          <PagesNav />
        </div>
      </div>
      <div className="seminars">
        <EventsTitle />
        <Lecture />
        <div className="navPagesLec">
          <PagesNav />
        </div>
      </div>
      <div className="LecFooter">
        <Footer />
      </div>
    </>
  );
}

export default Lectures;
