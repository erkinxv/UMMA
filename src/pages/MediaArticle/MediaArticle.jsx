import React from "react";
import Header from "../../components/Header/Header";
import medarc from "../../assets/medarcpng.png";
import LastNews1 from "../../assets/lastN1.png";
import calendar from "../../assets/calendar.png";
import Footer from "../../components/Footer/Footer";

const MediaArticlePage = () => (
  <div className="media-article">
    <div className="ma-left">
      <div className="ma-title">
        <h2>Meдиа</h2>
      </div>
      <h2>
        Отец Димитрий о нападках Запада на <br /> Россию: "Это давняя борьба
        тьмы со светом"
      </h2>
      <img src={medarc} alt="" />
      <div className="ma-left-descr">
        <h2>
          Отец Димитрий о нападках Запада на Россию: "Это давняя борьба тьмы со
          светом"
        </h2>
        <p>
          Ut nunc vulputate urna dignissim. Imperdiet tristique turpis maecenas
          mi eu augue. Ut nunc vulputate urna dignissim. Imperdiet tristique
          turpis maecenas mi eu augue. Ut nunc vulputate urna dignissim.
          Imperdiet tristique turpis maecenas mi eu augue. Ut nunc vulputate
          urna dignissim. Imperdiet tristique turpis maecenas mi eu augue.Ut
          nunc vulputate urna dignissim. Imperdiet tristique turpis maecenas mi
          eu augue.Ut nunc vulputate urna dignissim. Imperdiet tristique turpis
          maecenas mi eu augue. Ut nunc vulputate urna dignissim. Imperdiet
          tristique turpis maecenas mi eu augue. Ut nunc vulputate urna
          dignissim. Imperdiet tristique turpis maecenas mi eu augue. Ut nunc
          vulputate urna dignissim. Imperdiet tristique turpis maecenas mi eu
          augue. Ut nunc vulputate urna dignissim. Imperdiet tristique turpis
          maecenas mi eu augue. Ut nunc vulputate urna dignissim. Imperdiet
          tristique turpis maecenas mi eu augue. Ut nunc vulputate urna
          dignissim. Imperdiet tristique turpis maecenas mi eu augue. Ut nunc
          vulputate urna dignissim. Imperdiet{" "}
        </p>
        <p>
          Ut nunc vulputate urna dignissim. Imperdiet tristique turpis maecenas
          mi eu augue. Ut nunc vulputate urna dignissim. Imperdiet tristique
          turpis maecenas mi eu augue. Ut nunc vulputate urna dignissim.
          Imperdiet tristique turpis maecenas mi eu augue. Ut nunc vulputate
          urna dignissim. Imperdiet tristique turpis maecenas mi eu augue.Ut
          nunc vulputate urna dignissim. Imperdiet tristique turpis maecenas mi
          eu augue.Ut nunc vulputate urna dignissim. Imperdiet tristique turpis
          maecenas mi eu augue. Ut nunc vulputate urna dignissim. Imperdiet
          tristique turpis maecenas mi eu augue. Ut nunc vulputate urna
          dignissim. Imperdiet tristique turpis maecenas mi eu augue. Ut nunc
          vulputate urna dignissim. Imperdiet tristique turpis maecenas mi eu
          augue. Ut nunc vulputate urna dignissim. Imperdiet tristique turpis
          maecenas mi eu augue. Ut nunc vulputate urna dignissim. Imperdiet
          tristique turpis maecenas mi eu augue. Ut nunc vulputate urna
          dignissim. Imperdiet tristique turpis maecenas mi eu augue. Ut nunc
          vulputate urna dignissim. Imperdiet{" "}
        </p>
      </div>
    </div>
    <div className="ma-right">
      <MediaContents />
    </div>
  </div>
);

const mediaImages = [LastNews1, LastNews1, LastNews1, LastNews1];

const MediaContents = () => (
  <div className="medias-art">
    {mediaImages.map((item, index) => (
      <div key={index} className="last-news-box">
        <div className="ln-top">
          <img src={item} alt="" style={{ width: "282px", height: "188px" }} />
        </div>
        <div className="ln-bot">
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
  </div>
);

function MediaArticle() {
  return (
    <>
      <Header />
      <MediaArticlePage />
      <div className="footerMA">
        <Footer />
      </div>
    </>
  );
}

export default MediaArticle;
