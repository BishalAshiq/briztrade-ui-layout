import React from 'react';
import style from "../../app/home/home.module.css";
import topcat1 from "../../assests/topcat1.png";
import topcat2 from "../../assests/topcat2.png";
import topcat3 from "../../assests/topcat3.png";
import topcat4 from "../../assests/topcat4.png";
import topcat5 from "../../assests/topcat5.png";
import topcat6 from "../../assests/topcat6.png";
import topcat7 from "../../assests/topcat7.png";
import topcat8 from "../../assests/topcat8.png";
import topcat9 from "../../assests/topcat9.png";
import topcat10 from "../../assests/topcat10.png";
import topcat11 from "../../assests/topcat11.png";
import topcat12 from "../../assests/topcat12.png";
import bannerphoto from "../../assests/bannerphoto1.jpg";
import bannerphoto2 from "../../assests/bannerphoto2.png";
import bannerphoto3 from "../../assests/bannerphoto3.png";
import Image from 'next/image';
// import topCategoriSVG from '@/assests/svg-components/topCategoriSVG';

const Banner = () => {
    return (
        <div className={style.bannerfulldiv}>
            <div className='row'>
                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12'>
                    <div>
                        <div className={style.topCategoryfulldiv}>
                            <h3 className={style.topCategoryTag}>Top Categories</h3>
                            <div className={style.topCategorydiv}>
                                <div className={style.topCategories}>
                                    <Image src={topcat1} height={""} width={""} alt='' />
                                    <span className={style.topCatetext}>
                                        RMG & Accessories
                                    </span>
                                </div>

                                <div className={style.topCategories}>
                                    <Image src={topcat2} height={""} width={""} alt='' />
                                    <span className={style.topCatetext}>
                                        Leather &  Leather...
                                    </span>
                                </div>

                                <div className={style.topCategories}>
                                    <Image src={topcat3} height={""} width={""} alt='' />
                                    <span className={style.topCatetext}>
                                        Jute & Jute Produc...
                                    </span>
                                </div>

                                <div className={style.topCategories}>
                                    <Image src={topcat4} height={""} width={""} alt='' />
                                    <span className={style.topCatetext}>
                                        Agro & Agro Based...
                                    </span>
                                </div>

                                <div className={style.topCategories}>
                                    <Image src={topcat5} height={""} width={""} alt='' />
                                    <span className={style.topCatetext}>
                                        Home Textiles, Kitc...
                                    </span>
                                </div>

                                <div className={style.topCategories}>
                                    <Image src={topcat6} height={""} width={""} alt='' />
                                    <span className={style.topCatetext}>
                                        Handicraft & Handl...
                                    </span>
                                </div>

                                <div className={style.topCategories}>
                                    <Image src={topcat7} height={""} width={""} alt='' />
                                    <span className={style.topCatetext}>
                                        Food & Beverages...
                                    </span>
                                </div>

                                <div className={style.topCategories}>
                                    <Image src={topcat8} height={""} width={""} alt='' />
                                    <span className={style.topCatetext}>
                                        Furniture and Furnit...
                                    </span>
                                </div>

                                <div className={style.topCategories}>
                                    <Image src={topcat9} height={""} width={""} alt='' />
                                    <span className={style.topCatetext}>
                                        Building materials &...
                                    </span>
                                </div>

                                <div className={style.topCategories}>
                                    <Image src={topcat10} height={""} width={""} alt='' />
                                    <span className={style.topCatetext}>
                                        Books, Stationary &...
                                    </span>
                                </div>

                                <div className={style.topCategories}>
                                    <Image src={topcat11} height={""} width={""} alt='' />
                                    <span className={style.topCatetext}>
                                        Consumer Electroni...
                                    </span>
                                </div>

                                <div className={style.topCategories}>
                                    <Image src={topcat12} height={""} width={""} alt='' />
                                    <span className={style.topCatetext}>
                                        Fashion, Beauty & P...
                                    </span>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>


                <div className='col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12'>
                    <div className='row no-gutter'>
                        <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12'>
                            <div className={style.imageWrapper}>
                                <Image src={bannerphoto} height={""} width={""} alt='' />
                                <div className={style.textOverlay}>
                                    <h2 className={style.textOverlayh2}>Sell on Biztrade and reach millions of B2B buyer globally</h2>
                                    <button>Start Selling</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12'>
                            <div className='row'>
                                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                    <Image src={bannerphoto2} height={""} width={""} alt='' />
                                </div>
                                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                    <Image src={bannerphoto3} height={""} width={""} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;