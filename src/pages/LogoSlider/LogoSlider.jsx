import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import './LogoSlider.css';

import car1 from "../../assets/car1.png"
import car2 from "../../assets/car2.png"
import car3 from "../../assets/car3.png"
import car4 from "../../assets/car4.png"
import car5 from "../../assets/car5.png"
import car6 from "../../assets/car6.png"

const LogoSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div><img src={car1} alt="Logo 1" /></div>
                <div><img src={car2} alt="Logo 2" /></div>
                <div><img src={car3} alt="Logo 3" /></div>
                <div><img src={car4} alt="Logo 4" /></div>
                <div><img src={car5} alt="Logo 5" /></div>
                <div><img src={car6} alt="Logo 6" /></div>
            </Slider>
        </div>
    );
};

export default LogoSlider;
