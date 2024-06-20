import React from "react";
import calendar from "../../assets/calendar.png";
import viewed from "../../assets/viewed.png";
import share from "../../assets/share.png";

const DateComp = () => (
  <div className="cont-box-date">
    <div className="cbd-left">
      <div className="date">
        <img
          src={calendar}
          alt="Date"
          style={{ width: "15px", height: "15px" }}
        />
        <p>ЧТ, 19 мая, 2022</p>
      </div>
      <div className="viewed">
        <img src={viewed} alt="" style={{ width: "15px", height: "15px" }} />
        <p>729</p>
      </div>
    </div>
    <div className="share">
      <img src={share} alt="" style={{ width: "15px", height: "15px" }} />
      <p>Поделиться</p>
    </div>
  </div>
);

export default DateComp;
