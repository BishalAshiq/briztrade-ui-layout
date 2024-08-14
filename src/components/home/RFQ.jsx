"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectCreative } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import style from "../../app/home/home.module.css";

const RFQ = () => {
    return (
        <div>
            <div className={style.rfqfulldiv}>
                <h1>What is RFQ</h1>
                <div className='row'>
                    <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>

                        <div className='row'>
                            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                <div>
                                    <iframe width="200" height="105" src="https://www.youtube.com/embed/FTH6Dn3AyIQ?si=RNEug663PAHJjFVx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>
                                <div>
                                    <p>Request for Quotation is a free and easy solution for buyers who are seeking quality quotes. By sending out a simple request, you will receive multiple quotes from qualified suppliers</p>
                                </div>
                            </div>
                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                <div className={style.RFQnumbers}>
                                    <div className={style.RFQnumberofreaching}>
                                        <span>2,701000+</span>
                                        <span>RFQs posted</span>
                                    </div>
                                    <div className={style.RFQnumberofreaching}>
                                        <span>163,000++</span>
                                        <span>Active suppliers</span>
                                    </div>
                                    <div className={style.RFQnumberofreaching}>
                                        <span>22h</span>
                                        <span>Average response time</span>
                                    </div>
                                    <div className={style.RFQnumberofreaching}>
                                        <span>7602</span>
                                        <span>Industries covered</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                        <Swiper
                            grabCursor={true}
                            effect={'creative'}
                            creativeEffect={{
                                prev: {
                                    shadow: true,
                                    translate: [0, 0, -400],
                                },
                                next: {
                                    translate: ['100%', 0, 0],
                                },
                            }}
                            modules={[EffectCreative]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div>
                                    <div className='row'>
                                        <div className='col-xl-4 col-lg-4 col-md-4'>

                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 5</SwiperSlide>
                            <SwiperSlide>Slide 6</SwiperSlide>
                            <SwiperSlide>Slide 7</SwiperSlide>
                            <SwiperSlide>Slide 8</SwiperSlide>
                            <SwiperSlide>Slide 9</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RFQ;