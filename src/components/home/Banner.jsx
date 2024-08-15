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
import learn1 from "../../assests/learn1.png";
import learn2 from "../../assests/learn2.png";
import learn3 from "../../assests/learn3.png";
import learn4 from "../../assests/learn4.png";
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
                            <a href='/'>View all categories</a>
                        </div>
                      
                    </div>

                </div>


                <div className='col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12'>
                   <div className={style.bannerFirstfulldiv}>
                   <div className='row'>
                        <div className='col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12'>
                            <div className={style.imageWrapper}>
                                <Image className={style.bannerimage} src={bannerphoto} height={""} width={""} alt='' />
                                <div className={style.textOverlay}>
                                    <h2 className={style.textOverlayh2}>Sell on Biztrade and reach millions of B2B buyer globally</h2>
                                    <button>Start Selling</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12'>
                            <div className='row'>
                                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                    <div className={style.imgContainer}>
                                        <Image className={style.img} src={bannerphoto2} height={""} width={""} alt='' />
                                        <div className={style.textOverlaytwo}>
                                            <h3>Source product from trusted suppliers</h3>
                                            <button>
                                                Explore <strong>Seller List</strong>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                                    <div className={style.imgContainer}>
                                        <Image className={style.img} src={bannerphoto3} height={""} width={""} alt='' />
                                        <div className={style.textOverlaytwo}>
                                            <h3>Searching for a
                                                product?</h3>
                                            <button>
                                                Post Buy <strong>Requirement</strong>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>

                    <div>
                        <div>
                            <h3 className={style.moreServiceTag}>More Services</h3>

                            <div className={style.bannermoreservicediv}>
                                <div className='row'>
                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12'>
                                        <div className={style.learnCard}>
                                            <div className={style.learnCardtexts}>
                                                <h6>  Buyer
                                                    Matchmaking</h6>

                                                <p className={style.learnMoretest}>Learn more<span>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11 0C4.928 0 0 4.928 0 11C0 17.072 4.928 22 11 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 11 0ZM15.433 11.583L12.133 14.883C11.968 15.048 11.759 15.125 11.55 15.125C11.341 15.125 11.132 15.048 10.967 14.883C10.648 14.564 10.648 14.036 10.967 13.717L12.859 11.825H7.15C6.699 11.825 6.325 11.451 6.325 11C6.325 10.549 6.699 10.175 7.15 10.175H12.859L10.967 8.283C10.648 7.964 10.648 7.436 10.967 7.117C11.286 6.798 11.814 6.798 12.133 7.117L15.433 10.417C15.752 10.736 15.752 11.264 15.433 11.583Z" fill="#F8881E" />
                                                    </svg>
                                                </span></p>
                                            </div>


                                            <div>
                                                <Image src={learn1} height={25} width={100} alt='' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12'>
                                    <div className={style.learnCard}>
                                            <div className={style.learnCardtexts}>
                                                <h6>  Become a
                                                Seller</h6>

                                                <p className={style.learnMoretest}>Learn more<span>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11 0C4.928 0 0 4.928 0 11C0 17.072 4.928 22 11 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 11 0ZM15.433 11.583L12.133 14.883C11.968 15.048 11.759 15.125 11.55 15.125C11.341 15.125 11.132 15.048 10.967 14.883C10.648 14.564 10.648 14.036 10.967 13.717L12.859 11.825H7.15C6.699 11.825 6.325 11.451 6.325 11C6.325 10.549 6.699 10.175 7.15 10.175H12.859L10.967 8.283C10.648 7.964 10.648 7.436 10.967 7.117C11.286 6.798 11.814 6.798 12.133 7.117L15.433 10.417C15.752 10.736 15.752 11.264 15.433 11.583Z" fill="#F8881E" />
                                                    </svg>
                                                </span></p>
                                            </div>


                                            <div>
                                                <Image src={learn2} height={25} width={80} alt='' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12'>
                                    <div className={style.learnCard}>
                                            <div className={style.learnCardtexts}>
                                                <h6>  Legal Service</h6>

                                                <p className={style.learnMoretest}>Learn more<span>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11 0C4.928 0 0 4.928 0 11C0 17.072 4.928 22 11 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 11 0ZM15.433 11.583L12.133 14.883C11.968 15.048 11.759 15.125 11.55 15.125C11.341 15.125 11.132 15.048 10.967 14.883C10.648 14.564 10.648 14.036 10.967 13.717L12.859 11.825H7.15C6.699 11.825 6.325 11.451 6.325 11C6.325 10.549 6.699 10.175 7.15 10.175H12.859L10.967 8.283C10.648 7.964 10.648 7.436 10.967 7.117C11.286 6.798 11.814 6.798 12.133 7.117L15.433 10.417C15.752 10.736 15.752 11.264 15.433 11.583Z" fill="#F8881E" />
                                                    </svg>
                                                </span></p>
                                            </div>


                                            <div>
                                                <Image src={learn3} height={25} width={80} alt='' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12'>
                                    <div className={style.learnCard}>
                                            <div className={style.learnCardtexts}>
                                                <h6>Membership
                                                Plans</h6>

                                                <p className={style.learnMoretest}>Learn more<span>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11 0C4.928 0 0 4.928 0 11C0 17.072 4.928 22 11 22C17.072 22 22 17.072 22 11C22 4.928 17.072 0 11 0ZM15.433 11.583L12.133 14.883C11.968 15.048 11.759 15.125 11.55 15.125C11.341 15.125 11.132 15.048 10.967 14.883C10.648 14.564 10.648 14.036 10.967 13.717L12.859 11.825H7.15C6.699 11.825 6.325 11.451 6.325 11C6.325 10.549 6.699 10.175 7.15 10.175H12.859L10.967 8.283C10.648 7.964 10.648 7.436 10.967 7.117C11.286 6.798 11.814 6.798 12.133 7.117L15.433 10.417C15.752 10.736 15.752 11.264 15.433 11.583Z" fill="#F8881E" />
                                                    </svg>
                                                </span></p>
                                            </div>


                                            <div>
                                                <Image src={learn4} height={25} width={80} alt='' />
                                            </div>
                                        </div>
                                    </div>
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