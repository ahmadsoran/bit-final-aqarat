import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from './SliderCard.jsx';
import { useGetPropertyQuery } from '../store/testApi.js';
export default function SliderLib() {
    const featuredCardSettings = {
        dots: true,
        infinite: false,
        slidesToShow: 3,

        slidesToScroll: 1,
        arrows: false,
        lazyLoad: true,
        // centerPadding: '300px',
        slide: 'main',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const { data } = useGetPropertyQuery();

    return (
        <Slider {...featuredCardSettings}>
            {data?.map((CardData, index) => {

                return <SliderCard key={index} distance={CardData.propertyDistance} action={CardData.propertyAction} img={CardData.propertyImg} location={CardData.propertyLocation} price={CardData.propertyPrice} type={CardData.propertyType} description={CardData.propertyDescription} bed={CardData.propertyBed} bath={CardData.propertyBath} sqft={CardData.propertySqFT} />

            })}


        </Slider>
    )
}
