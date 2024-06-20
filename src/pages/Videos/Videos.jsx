import React from "react";
import LastNews1 from "../../assets/lastN1.png";
import calendar from "../../assets/calendar.png";
import Header from "../../components/Header/Header";
import shorts from "../../assets/shorts.png";

import { PagesNav } from "../Home/Home";
import Footer from "../../components/Footer/Footer";

const shortMediaImages = [
  LastNews1,
  LastNews1,
  LastNews1,
  LastNews1,
  LastNews1,
  LastNews1,
  LastNews1,
  LastNews1,
  LastNews1,
  LastNews1,
  LastNews1,
  LastNews1,
];

const VideosTitle = () => (
  <div className="sec-4-title">
    <h2>Медиа</h2>
    <div className="sec-4-links">
      <ul>
        <li>
          <a href="">Все</a>
          <a href="">Видео</a>
          <a href="">Аудио</a>
          <a href="">Фото</a>
          <a href="">Инфографика</a>
        </li>
      </ul>
    </div>
  </div>
);

const ShortsMediaContents = () => (
  <div className="medias-sh-2">
    {shortMediaImages.map((item, index) => (
      <div key={index} className="last-news-box">
        <div className="ln-top">
          <img src={item} alt="" style={{ width: "282px", height: "188px" }} />
        </div>
        <div className="ln-bot1">
          <div className="cont-box-date">
            <img
              src={calendar}
              alt="Date"
              style={{ width: "15px", height: "15px" }}
            />
            <p>ЧТ, 19 мая, 2022</p>
          </div>
          <div className="ln-descr">
            <h3>
              ООН призвал местных граждан к прекращению провокаций на территории
              Иерусалима
            </h3>
          </div>
        </div>
      </div>
    ))}
    <div className="navPage">
      <PagesNav />
    </div>
  </div>
);

const shortsPreview = [shorts, shorts, shorts, shorts, shorts];

const ShortsTitle = () => (
  <div className="sh-title">
    <h2>Shorts</h2>
  </div>
);

const MediaShorts = () => (
  <div className="media-shorts">
    {shortsPreview.map((item, index) => (
      <div key={index} className="shorts-box">
        <img src={item} alt="" />
        <div className="title-media-shorts">
          <div className="cont-box-date">
            <img
              src={calendar}
              alt="Date"
              style={{ width: "15px", height: "15px" }}
            />
            <p>ЧТ, 19 мая, 2022</p>
          </div>
          <div className="media-sh-descriptions">
            <p>
              ООН призвал местных граждан к прекращению провокаций на территории
              Иерусалима
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

function Videos() {
  return (
    <>
      <Header />
      <div className="videos-title">
        <VideosTitle />
      </div>
      <ShortsMediaContents />
      <div className="shortsVideos">
        <ShortsTitle />
        <MediaShorts />
      </div>
      <div className="videos-footer">
        <Footer />
      </div>
    </>
  );
}

export default Videos;
