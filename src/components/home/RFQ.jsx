"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectCreative, Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import style from "../../app/home/home.module.css";
import rfqpic from "../../assests/passport.png"



const RFQ = () => {
    return (
        <div>
            <div className={style.rfqfulldiv}>
                <h1 className={style.rfqtag}>What is RFQ</h1>
                <div className='row'>
                    <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>
                        <div className={style.vidiorfq}>
                            <div className='row'>
                                <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                    <div className={style.vidiorfqiframe}>
                                        <iframe width="200" height="105" src="https://www.youtube.com/embed/FTH6Dn3AyIQ?si=RNEug663PAHJjFVx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div>
                                </div>
                                <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>
                                    <div>
                                        <p className={style.moqparagrap}>Request for Quotation is a free and easy solution for buyers who are seeking quality quotes. By sending out a simple request, you will receive multiple quotes from qualified suppliers</p>
                                    </div>
                                </div>
                                <hr className={style.ROFhr}/>
                                
                                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                    <div className={style.RFQnumbers}>
                                        <div className={style.RFQnumberofreaching}>
                                            <span className={style.moqNumbers}>2,701000+</span>
                                            <span className={style.moqNumtext}>RFQs posted</span>
                                        </div>
                                        <div className={style.RFQnumberofreaching}>
                                            <span className={style.moqNumbers}>163,000++</span>
                                            <span className={style.moqNumtext}>Active suppliers</span>
                                        </div>
                                        <div className={style.RFQnumberofreaching}>
                                            <span className={style.moqNumbers}>22h</span>
                                            <span className={style.moqNumtext}>Average response time</span>
                                        </div>
                                        <div className={style.RFQnumberofreaching}>
                                            <span className={style.moqNumbers}>7602</span>
                                            <span className={style.moqNumtext}>Industries covered</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>

                    </div>

                    <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                        <div className={style.rfqcardfull}>
                            <Swiper

                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 5500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                    el: `.${style.customPagination}`,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className={style.rfqcard}>
                                        <div className='row'>
                                            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                                <img className={style.rfqimg} src={rfqpic.src} alt='' />
                                            </div>
                                            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>
                                                <h6 className={style.textts}>Buyer from the U.S</h6>
                                                <p className={style.texttss}>Hardware  Computer and Phone
                                                    Accessories Business</p>
                                            </div>
                                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                                <p className={style.texttsss}>   "With RFQ I connected with almost 100
                                                    factories in an instant. Vendor on
                                                    Biztrade reply quickly</p>

                                            </div>

                                        </div>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={style.rfqcard}>
                                        <div className='row'>
                                            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                                <img className={style.rfqimg} src={rfqpic.src} alt='' />
                                            </div>
                                            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>
                                                <h6 className={style.textts}>Buyer from the U.S</h6>
                                                <p className={style.texttss}>Hardware  Computer and Phone
                                                    Accessories Business</p>
                                            </div>
                                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                                <p className={style.texttsss}>   "With RFQ I connected with almost 100
                                                    factories in an instant. Vendor on
                                                    Biztrade reply quickly</p>

                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={style.rfqcard}>
                                        <div className='row'>
                                            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                                <img className={style.rfqimg} src={rfqpic.src} alt='' />
                                            </div>
                                            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>
                                                <h6 className={style.textts}>Buyer from the U.S</h6>
                                                <p className={style.texttss}>Hardware  Computer and Phone
                                                    Accessories Business</p>
                                            </div>
                                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                                <p className={style.texttsss}>   "With RFQ I connected with almost 100
                                                    factories in an instant. Vendor on
                                                    Biztrade reply quickly</p>

                                            </div>


                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={style.rfqcard}>
                                        <div className='row'>
                                            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                                <img className={style.rfqimg} src={rfqpic.src} alt='' />
                                            </div>
                                            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>
                                                <h6 className={style.textts}>Buyer from the U.S</h6>
                                                <p className={style.texttss}>Hardware  Computer and Phone
                                                    Accessories Business</p>
                                            </div>
                                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                                <p className={style.texttss}>   "With RFQ I connected with almost 100
                                                    factories in an instant. Vendor on
                                                    Biztrade reply quickly</p>

                                            </div>


                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={style.rfqcard}>
                                        <div className='row'>
                                            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                                <img className={style.rfqimg} src={rfqpic.src} alt='' />
                                            </div>
                                            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>
                                                <h6 className={style.textts}>Buyer from the U.S</h6>
                                                <p className={style.texttss}>Hardware  Computer and Phone
                                                    Accessories Business</p>
                                            </div>
                                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                                <p className={style.texttsss}>   "With RFQ I connected with almost 100
                                                    factories in an instant. Vendor on
                                                    Biztrade reply quickly</p>

                                            </div>


                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={style.rfqcard}>
                                        <div className='row'>
                                            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                                <img className={style.rfqimg} src={rfqpic.src} alt='' />
                                            </div>
                                            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>
                                                <h6 className={style.textts}>Buyer from the U.S</h6>
                                                <p className={style.texttss}>Hardware  Computer and Phone
                                                    Accessories Business</p>
                                            </div>
                                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                                <p className={style.texttsss}>   "With RFQ I connected with almost 100
                                                    factories in an instant. Vendor on
                                                    Biztrade reply quickly</p>

                                            </div>


                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={style.rfqcard}>
                                        <div className='row'>
                                            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                                <img className={style.rfqimg} src={rfqpic.src} alt='' />
                                            </div>
                                            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>
                                                <h6 className={style.textts}>Buyer from the U.S</h6>
                                                <p className={style.texttss}>Hardware  Computer and Phone
                                                    Accessories Business</p>
                                            </div>
                                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                                <p className={style.texttsss}>   "With RFQ I connected with almost 100
                                                    factories in an instant. Vendor on
                                                    Biztrade reply quickly</p>

                                            </div>


                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={style.rfqcard}>
                                        <div className='row'>
                                            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                                <img className={style.rfqimg} src={rfqpic.src} alt='' />
                                            </div>
                                            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>
                                                <h6 className={style.textts}>Buyer from the U.S</h6>
                                                <p className={style.texttss}>Hardware  Computer and Phone
                                                    Accessories Business</p>
                                            </div>
                                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                                <p className={style.texttsss}>   "With RFQ I connected with almost 100
                                                    factories in an instant. Vendor on
                                                    Biztrade reply quickly</p>

                                            </div>


                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={style.rfqcard}>
                                        <div className='row'>
                                            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                                <img className={style.rfqimg} src={rfqpic.src} alt='' />
                                            </div>
                                            <div className='col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12'>
                                                <h6 className={style.textts}>Buyer from the U.S</h6>
                                                <p className={style.texttss}>Hardware  Computer and Phone
                                                    Accessories Business</p>
                                            </div>
                                            <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                                <p className={style.texttsss}>   "With RFQ I connected with almost 100
                                                    factories in an instant. Vendor on
                                                    Biztrade reply quickly</p>

                                            </div>


                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RFQ;