import React from "react";
import Header from "../../components/Header/Header";
import halal1 from "../../assets/halal1.png";
import halal2 from "../../assets/halal2.png";
import halal3 from "../../assets/halal3.png";
import halal4 from "../../assets/halal4.png";
import halal5 from "../../assets/halal5.png";
import halal6 from "../../assets/halal6.png";
import halal7 from "../../assets/halal7.png";
import halal8 from "../../assets/halal8.png";
import StarRating from "../../components/StarRating/StarRating";
import Footer from "../../components/Footer/Footer";
import { PagesNav } from "../Home/Home";

const halalInfo = [
  {
    name: "Кафе La Piala | COFFEE",
    image: halal1,
    phone: "0557 728 000",
    address: "142 ул. А.Суюмбаева",
  },
  {
    name: "Кафе La Piala | COFFEE",
    image: halal2,
    phone: "0557 728 000",
    address: "142 ул. А.Суюмбаева",
  },
  {
    name: "Кафе La Piala | COFFEE",
    image: halal3,
    phone: "0557 728 000",
    address: "142 ул. А.Суюмбаева",
  },
  {
    name: "Кафе La Piala | COFFEE",
    image: halal4,
    phone: "0557 728 000",
    address: "142 ул. А.Суюмбаева",
  },
  {
    name: "Кафе La Piala | COFFEE",
    image: halal5,
    phone: "0557 728 000",
    address: "142 ул. А.Суюмбаева",
  },
  {
    name: "Кафе La Piala | COFFEE",
    image: halal6,
    phone: "0557 728 000",
    address: "142 ул. А.Суюмбаева",
  },
  {
    name: "Кафе La Piala | COFFEE",
    image: halal7,
    phone: "0557 728 000",
    address: "142 ул. А.Суюмбаева",
  },
  {
    name: "Кафе La Piala | COFFEE",
    image: halal8,
    phone: "0557 728 000",
    address: "142 ул. А.Суюмбаева",
  },
  {
    name: "Кафе La Piala | COFFEE",
    image: halal1,
    phone: "0557 728 000",
    address: "142 ул. А.Суюмбаева",
  },
  {
    name: "Кафе La Piala | COFFEE",
    image: halal2,
    phone: "0557 728 000",
    address: "142 ул. А.Суюмбаева",
  },
  {
    name: "Кафе La Piala | COFFEE",
    image: halal3,
    phone: "0557 728 000",
    address: "142 ул. А.Суюмбаева",
  },
  {
    name: "Кафе La Piala | COFFEE",
    image: halal4,
    phone: "0557 728 000",
    address: "142 ул. А.Суюмбаева",
  },
  {
    name: "Кафе La Piala | COFFEE",
    image: halal5,
    phone: "0557 728 000",
    address: "142 ул. А.Суюмбаева",
  },
  {
    name: "Кафе La Piala | COFFEE",
    image: halal6,
    phone: "0557 728 000",
    address: "142 ул. А.Суюмбаева",
  },
  {
    name: "Кафе La Piala | COFFEE",
    image: halal7,
    phone: "0557 728 000",
    address: "142 ул. А.Суюмбаева",
  },
  {
    name: "Кафе La Piala | COFFEE",
    image: halal8,
    phone: "0557 728 000",
    address: "142 ул. А.Суюмбаева",
  },
];

const RestarauntsTitle = () => (
  <div className="hg-title">
    <h2>Halal Guide</h2>
    <div className="hg-title-buttons">
      <button>Кафе</button>
      <button>Мечети</button>
      <button>Рестораны</button>
      <button>Рынки</button>
    </div>
  </div>
);

const Restaraunts = () => (
  <div className="halalguides">
    {halalInfo.map((item, index) => (
      <div key={index} className="halal-box">
        <div className="hb-top">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="hb-bot">
          <h3>{item.name}</h3>
          <StarRating />
          <p>
            <span className="designation">Телефон:</span> {item.phone}
          </p>
          <p>
            <span className="designation">Адрес: </span>
            {item.address}
          </p>
        </div>
      </div>
    ))}
  </div>
);

function HalalGuide() {
  return (
    <>
      <Header />
      <RestarauntsTitle />
      <Restaraunts />
      <div className="navPages">
        <PagesNav />
      </div>
      <Footer />
    </>
  );
}

export default HalalGuide;
