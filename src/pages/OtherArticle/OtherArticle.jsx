import React from "react";
import ArticleHeader from "../../components/ArticleHeader/ArticleHeader";
import other1 from "../../assets/other1.png";
import other2 from "../../assets/other2.png";
import otherArr from "../../assets/otherArr.png";
import TodayDate from "../../components/Dates/TodayDate";
import otherlast1 from "../../assets/otherlast1.png";
import otherlast2 from "../../assets/otherlast2.png";
import otherlast3 from "../../assets/otherlast3.png";
import Footer from "../../components/Footer/Footer";
import ArticleFooter from "../../components/ArticleFooter/ArticleFooter";

const otherArtImages = [
  otherlast1,
  otherlast2,
  otherlast2,
  otherlast2,
  otherlast2,
  otherlast2,
  otherlast3,
  otherlast3,
  otherlast3,
  otherlast3,
];

const OtherArt = () => (
  <div className="other-art">
    <div className="oa-left">
      <h1>
        «Поводов для паники нет». Как кабмин <br /> оценивает ситуацию на
        валютном рынке Кыргызстана.
      </h1>
      <div className="oa-left-img">
        <img src={other1} alt="" />
        <div className="img-navs">
          <div className="img-navs-left">
            <p>Фото: 1 из 10</p>
            <img src={otherArr} alt="" />
            <img src={otherArr} alt="" style={{ rotate: "180deg" }} />
          </div>
          <div className="img-navs-right">
            <TodayDate />
          </div>
        </div>
        <div className="oa-sec-img">
          <h1>
            Отец Димитрий о нападках Запада на Россию: "Это давняя борьба тьмы
            со светом"
          </h1>
          <p>
            Ut nunc vulputate urna dignissim. Imperdiet tristique turpis
            maecenas mi eu augue. Ut nunc vulputate urna dignissim. Imperdiet
            tristique turpis maecenas mi eu augue. Ut nunc vulputate urna
            dignissim. Imperdiet tristique turpis maecenas mi eu augue. Ut nunc
            vulputate urna dignissim. Imperdiet tristique turpis maecenas mi eu
            augue.Ut nunc vulputate urna dignissim. Imperdiet tristique turpis
            maecenas mi eu augue.Ut nunc vulputate urna dignissim. Imperdiet
            tristique turpis maecenas mi eu augue. Ut nunc vulputate urna
            dignissim. Imperdiet tristique turpis maecenas mi eu augue. Ut nunc
            vulputate urna dignissim. Imperdiet tristique turpis maecenas mi eu
            augue. Ut nunc vulputate urna dignissim. Imperdiet tristique turpis
            maecenas mi eu augue. Ut nunc vulputate urna dignissim. Imperdiet
            tristique turpis maecenas mi eu augue. Ut nunc vulputate urna
            dignissim. Imperdiet tristique turpis maecenas mi eu augue. Ut nunc
            vulputate urna dignissim. Imperdiet tristique turpis maecenas mi eu
            augue. Ut nunc vulputate urna dignissim. Imperdiet{" "}
          </p>
          <img src={other2} alt="" />
          <p>
            Ut nunc vulputate urna dignissim. Imperdiet tristique turpis
            maecenas mi eu augue. Ut nunc vulputate urna dignissim. Imperdiet
            tristique turpis maecenas mi eu augue. Ut nunc vulputate urna
            dignissim. Imperdiet tristique turpis maecenas mi eu augue. Ut nunc
            vulputate urna dignissim. Imperdiet tristique turpis maecenas mi eu
            augue.Ut nunc vulputate urna di
          </p>
        </div>
      </div>
    </div>
    <div className="oa-right">
      <div className="oa-right-news">
        <h2>Последние новости</h2>
        {[
          otherArtImages.map((item, index) => (
            <div className="oa-news-box">
              <div className="oa-nb-left">
                <img src={item} alt="" />
              </div>
              <div className="oa-nb-right">
                <TodayDate />
                <h3>Президент подписал указ о повышении зарплат.</h3>
                <p>
                  Ut nunc vulputate urna dignissim. Imperdiet tristique turpis
                  maecenas mi eu augue.
                </p>
              </div>
            </div>
          )),
        ]}
        <button>Все новости</button>
      </div>
    </div>
  </div>
);

function OtherArticle() {
  return (
    <>
      <ArticleHeader />
      <OtherArt />
      <div className="otherFooter">
        {/* <Footer /> */}
        <ArticleFooter />
      </div>
    </>
  );
}

export default OtherArticle;
