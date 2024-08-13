"use client"
import Slider from 'react-slick';
import style from "../../app/home/home.module.css";
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import bAp1 from "../../assests/badvisor1.png";
import bAp2 from "../../assests/badvisor2.png";
import bAp3 from "../../assests/badvisor3.png";
import bAp4 from "../../assests/badvisor4.png";

const BusinessAdv = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: false,
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
                <h6 className={style.sellerTag}>Business Advisory</h6>
                <div>
                    <Slider {...settings}>
                        <div>

                            <div className={style.businessAdvisorDiv}>
                                <img className={style.businessAdviImg} src={bAp1.src} alt='' />
                                <div>
                                    <p className={style.businessAdvisortag}>B2B Matchmaking</p>
                                    <p className={style.businessAdvisorparag}>We won't leave you hanging after your website is complete. We can take an in-depth look at your online marketing opportunities including SEO, Google Ads and inbound marketing techniques</p>

                                    <button className={style.businessAdvisorbuttonOne}>Web Design</button>
                                    <button className={style.businessAdvisorbuttontwo}>Web Development</button>

                                </div>
                            </div>

                        </div>
                        <div>

                            <div className={style.businessAdvisorDiv}>
                                <img className={style.businessAdviImg} src={bAp2.src} alt='' />
                                <div>
                                    <p className={style.businessAdvisortag}>Licensing</p>
                                    <p className={style.businessAdvisorparag}>We won't leave you hanging after your website is complete. We can take an in-depth look at your online marketing opportunities including SEO, Google Ads and inbound marketing techniques</p>

                                    <button className={style.businessAdvisorbuttonOne}>SEO Package</button>
                                    <button className={style.businessAdvisorbuttontwo}>Digital Marketing</button>

                                </div>
                            </div>

                        </div>
                        <div>

                            <div className={style.businessAdvisorDiv}>
                                <img className={style.businessAdviImg} src={bAp3.src} alt='' />
                                <div>
                                    <p className={style.businessAdvisortag}>B2B Matchmaking</p>
                                    <p className={style.businessAdvisorparag}>We won't leave you hanging after your website is complete. We can take an in-depth look at your online marketing opportunities including SEO, Google Ads and inbound marketing techniques</p>

                                    <button className={style.businessAdvisorbuttonOne}>SEO Package</button>
                                    <button className={style.businessAdvisorbuttontwo}>Digital Marketing</button>

                                </div>
                            </div>

                        </div>
                        <div>

                            <div className={style.businessAdvisorDiv}>
                                <img className={style.businessAdviImg} src={bAp4.src} alt='' />
                                <div>
                                    <p className={style.businessAdvisortag}>B2B Matchmaking</p>
                                    <p className={style.businessAdvisorparag}>We won't leave you hanging after your website is complete. We can take an in-depth look at your online marketing opportunities including SEO, Google Ads and inbound marketing techniques</p>

                                    <button className={style.businessAdvisorbuttonOne}>SEO Package</button>
                                    <button className={style.businessAdvisorbuttontwo}>Digital Marketing</button>

                                </div>
                            </div>

                        </div>
                        <div>

                            <div className={style.businessAdvisorDiv}>
                                <img className={style.businessAdviImg} src={bAp1.src} alt='' />
                                <div>
                                    <p className={style.businessAdvisortag}>B2B Matchmaking</p>
                                    <p className={style.businessAdvisorparag}>We won't leave you hanging after your website is complete. We can take an in-depth look at your online marketing opportunities including SEO, Google Ads and inbound marketing techniques</p>
                                    <button className={style.businessAdvisorbuttonOne}>SEO Package</button>
                                    <button className={style.businessAdvisorbuttontwo}>Digital Marketing</button>

                                </div>
                            </div>

                        </div>
                        <div>

                            <div className={style.businessAdvisorDiv}>
                                <img className={style.businessAdviImg} src={bAp3.src} alt='' />
                                <div>
                                    <p className={style.businessAdvisortag}>B2B Matchmaking</p>
                                    <p className={style.businessAdvisorparag}>We won't leave you hanging after your website is complete. We can take an in-depth look at your online marketing opportunities including SEO, Google Ads and inbound marketing techniques</p>

                                    <button className={style.businessAdvisorbuttonOne}>SEO Package</button>
                                    <button className={style.businessAdvisorbuttontwo}>Digital Marketing</button>

                                </div>
                            </div>

                        </div>
                     


                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default BusinessAdv;