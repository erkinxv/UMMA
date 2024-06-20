import React from "react";
import calendar from "../../assets/calendar.png";

const TodayDate = () => (
  <div className="cont-box-date">
    <div className="date">
      <img
        src={calendar}
        alt="Date"
        style={{ width: "15px", height: "15px" }}
      />
      <p>ЧТ, 19 мая, 2022</p>
    </div>
  </div>
);

export default TodayDate;
