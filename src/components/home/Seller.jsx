"use client"
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import sellerAdd from '../../assests/addidas.png';
import sellerLacos from '../../assests/lacoste.png';
import sellerking from '../../assests/king.png';
import sellergoll from '../../assests/gollll.png';
import sellerdigitWor from '../../assests/digitWor.png';
import style from "../../app/home/home.module.css";
import Slider from 'react-slick';



const Seller = () => {

    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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
        <div>
            <div>
                <h1>Featured Seller</h1>

                <Slider {...settings}>
                <div>
                            <div className={style.sellerCard}>
                                <Image src={sellerAdd} height={""} width={""} alt='' />
                                <p className={style.sellerTitle}>Title</p>
                                <span className={style.sellerType}>Type</span>
                                <span>Rating</span>


                            </div>
                        </div>
                <div>
                            <div className={style.sellerCard}>
                                <Image src={sellerLacos} height={""} width={""} alt='' />
                                <p className={style.sellerTitle}>Title</p>
                                <span className={style.sellerType}>Type</span>
                                <span>Rating</span>


                            </div>
                        </div>
                <div>
                            <div className={style.sellerCard}>
                                <Image src={sellerdigitWor} height={""} width={""} alt='' />
                                <p className={style.sellerTitle}>Title</p>
                                <span className={style.sellerType}>Type</span>
                                <span>Rating</span>


                            </div>
                        </div>
                <div>
                            <div className={style.sellerCard}>
                                <Image src={sellerAdd} height={""} width={""} alt='' />
                                <p className={style.sellerTitle}>Title</p>
                                <span className={style.sellerType}>Type</span>
                                <span>Rating</span>


                            </div>
                        </div>
                <div>
                            <div className={style.sellerCard}>
                                <Image src={sellergoll} height={""} width={""} alt='' />
                                <p className={style.sellerTitle}>Title</p>
                                <span className={style.sellerType}>Type</span>
                                <span>Rating</span>


                            </div>
                        </div>
                <div>
                            <div className={style.sellerCard}>
                                <Image src={sellerking} height={""} width={""} alt='' />
                                <p className={style.sellerTitle}>Title</p>
                                <span className={style.sellerType}>Type</span>
                                <span>Rating</span>


                            </div>
                        </div>
                <div>
                            <div className={style.sellerCard}>
                                <Image src={sellerAdd} height={""} width={""} alt='' />
                                <p className={style.sellerTitle}>Title</p>
                                <span className={style.sellerType}>Type</span>
                                <span>Rating</span>


                            </div>
                        </div>
           
            </Slider>
            </div>
        </div>
    );
};

export default Seller;



