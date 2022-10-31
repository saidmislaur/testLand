import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class Slide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
            <Card 
                name="Kian K." 
                data="2 mounth ago" 
                text="Had troubles opening my door lock once in a while. 
                I decided to take care of the business before it gets worse. 
                As I don't know much about locks, I called this company. 
                The locksmith came to me in 20 minutes, checked the lock, and told me 
                it needs cleaning. He finished the job in a few minutes. Must say I'm pleased with the level of service. They are somebody I can rely on. Definitely recommend them."
            />
            <Card 
                name="Jones J." 
                data="8 days ago" 
                text="I called these guys in hopes they would do a good job on replacing my door locks. I must say, the locksmith, if I remember correctly, his name is John, handled the job with ease, and my locks are working perfectly up to the present moment. Thanks a bunch!"
            />
            <Card 
                name="Jimmy H." 
                data="6 mounth ago" 
                text="Finally, competent service in London. Unfortunately, I had often needed a locksmith and until now had rather unpleasant experiences.
                      However, London locksmith has met all of my expectations.
                      The dispatcher was extremely friendly, and the locksmith seemed to know his job."
            />
          <Card 
                name="Kian K." 
                data="2 mounth ago" 
                text="Had troubles opening my door lock once in a while. 
                I decided to take care of the business before it gets worse. 
                As I don't know much about locks, I called this company. 
                The locksmith came to me in 20 minutes, checked the lock, and told me 
                it needs cleaning. He finished the job in a few minutes. Must say I'm pleased with the level of service. They are somebody I can rely on. Definitely recommend them."
            />
            <Card 
                name="Jones J." 
                data="8 days ago" 
                text="I called these guys in hopes they would do a good job on replacing my door locks. I must say, the locksmith, if I remember correctly, his name is John, handled the job with ease, and my locks are working perfectly up to the present moment. Thanks a bunch!"
            />
            <Card 
                name="Jimmy H." 
                data="6 mounth ago" 
                text="Finally, competent service in London. Unfortunately, I had often needed a locksmith and until now had rather unpleasant experiences.
                      However, London locksmith has met all of my expectations.
                      The dispatcher was extremely friendly, and the locksmith seemed to know his job."
            />
        </Slider>
      </div>
    );
  }
}