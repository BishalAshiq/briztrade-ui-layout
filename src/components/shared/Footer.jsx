import React from 'react';
import style from "./Footer.module.css";
import ff1 from "../../assests/ff1.png";
import ff2 from "../../assests/ff2.png";
import ff3 from "../../assests/ff3.png";
import ff4 from "../../assests/ff4.png";
import ff5 from "../../assests/ff5.png";
import Image from 'next/image';


const Footer = () => {
    return (
        <div>
            <div>
                <div className={style.footInfofullOneDiv}>
                    <div className='container'>
                        <div className={style.footInfoOneDiv}>
                            <div className={style.footInfocard}>
                                <Image src={ff5} height={"48px"} width={"48px"} alt={""} />
                                <span className={style.footInfoctext}>Great Value</span>
                                <p className={style.footInfopara}>We offer competitive prices
                                    on over 100 million items  competitive countries
                                </p>
                            </div>
                            <div className={style.footInfocard}>
                                <Image src={ff1} height={"48px"} width={"48px"} alt={""} />
                                <span className={style.footInfoctext}>Worldwide shopping</span>
                                <p className={style.footInfopara}>We ship to over 200 countries
                                    and regions, and our site
                                    comes in 12</p>
                            </div>
                            <div className={style.footInfocard}>
                                <Image src={ff2} height={"48px"} width={"48px"} alt={""} />
                                <span className={style.footInfoctext}>Safe payment</span>
                                <p className={style.footInfopara}>Pay with the world’s most
                                    popular and secure payment
                                    methods.</p>
                            </div>
                            <div className={style.footInfocard}>
                                <Image src={ff3} height={"48px"} width={"48px"} alt={""} />
                                <span className={style.footInfoctext}>Shop with confidence</span>
                                <p className={style.footInfopara}>Our Buyer Protection policy
                                    covers your entire purchase
                                    journey</p>
                            </div>
                            <div className={style.footInfocard}>
                                <Image src={ff4} height={"48px"} width={"48px"} alt={""} />
                                <span className={style.footInfoctext}>Help center</span>
                                <p className={style.footInfopara}>Our Buyer Round-the-clock assistance
                                    for a smooth shopping
                                    experience.</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className={style.footInfofulltwoDiv}>
                        <div className='row'>
                            <div className='col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12'>
                                <div className={style.footerSocialfulldiv}>
                                    <h6 className={style.socpoliciesTag}>Stay Connected</h6>
                                    <div className={style.footerSocialdiv}>
                                        <span>   <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M32 22.704C32 28.528 28.528 32 22.704 32H20.8C19.92 32 19.2 31.28 19.2 30.4V21.168C19.2 20.736 19.552 20.368 19.984 20.368L22.8 20.32C23.024 20.304 23.216 20.144 23.264 19.92L23.824 16.864C23.872 16.576 23.648 16.304 23.344 16.304L19.936 16.352C19.488 16.352 19.136 16 19.12 15.568L19.056 11.648C19.056 11.392 19.264 11.168 19.536 11.168L23.376 11.104C23.648 11.104 23.856 10.896 23.856 10.624L23.792 6.78398C23.792 6.51198 23.584 6.304 23.312 6.304L18.992 6.36802C16.336 6.41602 14.224 8.592 14.272 11.248L14.352 15.648C14.368 16.096 14.016 16.448 13.568 16.464L11.648 16.496C11.376 16.496 11.168 16.704 11.168 16.976L11.216 20.016C11.216 20.288 11.424 20.496 11.696 20.496L13.616 20.464C14.064 20.464 14.416 20.816 14.432 21.248L14.576 30.368C14.592 31.264 13.872 32 12.976 32H9.296C3.472 32 0 28.528 0 22.688V9.296C0 3.472 3.472 0 9.296 0H22.704C28.528 0 32 3.472 32 9.296V22.704Z" fill="black" />
                                        </svg></span>
                                        <span>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.12349 32.0074C0.825886 32.0074 0.543116 31.8884 0.334793 31.6801C0.0520674 31.3973 -0.0669006 30.9807 0.0372613 30.5938L1.91219 23.5852C0.662248 21.2639 0.00747101 18.6449 0.00747101 15.9963C0.00747101 7.17229 7.17976 0 16.0037 0C24.8277 0 32 7.17229 32 15.9963C32 24.8203 24.8277 31.9925 16.0037 31.9925C13.3104 31.9925 10.6767 31.3229 8.32559 30.0432L1.42111 31.9628C1.31695 31.9925 1.22765 32.0074 1.12349 32.0074ZM8.47435 27.7368C8.66779 27.7368 8.86125 27.7965 9.03981 27.8857C11.1379 29.1208 13.5485 29.7754 16.0037 29.7754C23.5926 29.7754 29.768 23.6001 29.768 16.0111C29.768 8.42225 23.5926 2.24694 16.0037 2.24694C8.41483 2.24694 2.23951 8.42225 2.23951 16.0111C2.23951 18.4366 2.87935 20.8026 4.08465 22.8858C4.23345 23.1388 4.27812 23.4513 4.20372 23.734L2.7157 29.2992L8.19162 27.7814C8.2809 27.7517 8.38507 27.7368 8.47435 27.7368Z" fill="black" />
                                                <path d="M20.081 24.5816C19.1585 24.5816 18.2061 24.3733 17.2092 23.9417C16.2717 23.54 15.3342 23.0043 14.4265 22.3347C13.5337 21.6799 12.6559 20.9359 11.8524 20.1324C11.0488 19.314 10.3047 18.4509 9.65001 17.5581C8.98039 16.6207 8.44471 15.6981 8.05782 14.7904C7.64117 13.8083 7.43286 12.8411 7.43286 11.9185C7.43286 11.2638 7.55187 10.6388 7.77508 10.0585C8.01316 9.44836 8.40006 8.89778 8.90599 8.42161C9.85833 7.48415 11.2274 7.14193 12.3136 7.66274C12.6856 7.82643 12.9981 8.09427 13.2363 8.4514L14.9622 10.8769C15.1408 11.1149 15.2749 11.3679 15.379 11.6209C15.4981 11.9185 15.5725 12.2161 15.5725 12.4988C15.5725 12.8857 15.4682 13.2726 15.2598 13.6148C15.1259 13.838 14.9325 14.1059 14.6795 14.3589L14.4861 14.5672C14.5753 14.6862 14.6795 14.835 14.8432 15.0136C15.1557 15.3707 15.4979 15.7576 15.8699 16.1296C16.2419 16.4867 16.6139 16.8439 16.986 17.1563C17.1645 17.3051 17.3135 17.4242 17.4325 17.4986L17.6407 17.2903C17.9085 17.0224 18.1765 16.8141 18.4444 16.6802C18.9354 16.3677 19.6942 16.2933 20.3638 16.576C20.6019 16.6653 20.8399 16.7992 21.0929 16.9778L23.5781 18.7337C23.9203 18.9717 24.188 19.2991 24.3666 19.6711C24.5154 20.0431 24.575 20.3705 24.575 20.7127C24.575 21.1591 24.4707 21.5907 24.2773 22.0073C24.0838 22.3942 23.8606 22.7364 23.5928 23.0489C23.1166 23.5697 22.5662 23.9566 21.971 24.2096C21.3758 24.4626 20.7358 24.5816 20.081 24.5816ZM11.2273 9.67155C11.138 9.67155 10.8405 9.67155 10.4685 10.0436C10.1858 10.3114 9.99228 10.5942 9.85836 10.9066C9.72444 11.2191 9.6649 11.5763 9.6649 11.9334C9.6649 12.5584 9.81369 13.228 10.1113 13.9422C10.4238 14.6862 10.8851 15.4749 11.4506 16.2635C12.0309 17.0522 12.6856 17.8408 13.4148 18.57C14.144 19.2842 14.9176 19.9538 15.7211 20.549C16.4949 21.1145 17.2837 21.5609 18.0724 21.9032C19.2033 22.3942 20.2447 22.5132 21.0929 22.1561C21.3905 22.0371 21.6584 21.8288 21.9262 21.5609C22.0601 21.4121 22.1644 21.2633 22.2537 21.0699C22.2984 20.9657 22.328 20.8467 22.328 20.7425C22.328 20.7127 22.328 20.6681 22.2833 20.5788L19.7983 18.8527C19.6942 18.7783 19.59 18.7188 19.5007 18.689C19.4412 18.7188 19.3521 18.7634 19.1884 18.9271L18.6229 19.4925C18.1914 19.9241 17.5069 20.0431 16.9563 19.8497L16.6885 19.7306C16.3462 19.5521 15.9592 19.2842 15.5277 18.9122C15.111 18.5551 14.7094 18.1831 14.2779 17.7664C13.8612 17.3349 13.4892 16.9331 13.1321 16.5165C12.7451 16.0552 12.4773 15.6832 12.2987 15.3707L12.1351 14.9838C12.0904 14.835 12.0755 14.6713 12.0755 14.5225C12.0755 14.1059 12.2244 13.7339 12.5071 13.4363L13.0726 12.8559C13.2363 12.6923 13.2958 12.603 13.3256 12.5435C13.2809 12.4393 13.2214 12.35 13.147 12.2459L11.4059 9.79062L11.2273 9.67155Z" fill="black" />
                                            </svg>
                                        </span>
                                        <div>
                                            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.2 34H22.8C30.8 34 34 30.8 34 22.8V13.2C34 5.2 30.8 2 22.8 2H13.2C5.2 2 2 5.2 2 13.2V22.8C2 30.8 5.2 34 13.2 34Z" stroke="#292D32" stroke-width="3.98817" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M18 23.6001C21.0928 23.6001 23.6 21.0929 23.6 18.0001C23.6 14.9073 21.0928 12.4001 18 12.4001C14.9072 12.4001 12.4 14.9073 12.4 18.0001C12.4 21.0929 14.9072 23.6001 18 23.6001Z" stroke="#292D32" stroke-width="3.98817" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M27.0176 10H27.0362" stroke="#292D32" stroke-width="5.31757" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className='col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6'>
                                <div>
                                    <h6 className={style.socpoliciesTag}>About US</h6>
                                   <div className={style.footerPoliciesdiv}>
                                   <a href='/'>About Biztrade</a>
                                    <a href='/'>Biztradebd.com Blog</a>
                                    <a href='/'>Terms & Condition</a>
                                    <a href='/'>Policies & Rules</a>
                                    <a href='/'>Privacy Policy</a>
                                    <a href='/'>Open a Case</a>
                                </div>
                                   </div>
                            </div>
                            <div className='col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6'>
                                <div>
                                    <h6 className={style.socpoliciesTag}>Source on Biztrade</h6>
                                    <div className={style.footerPoliciesdiv}>
                                        <a href='/'>About Biztrade</a>
                                        <a href='/'>Biztradebd.com Blog</a>
                                        <a href='/'>Terms & Condition</a>
                                        <a href='/'>Policies & Rules</a>
                                        <a href='/'>Privacy Policy</a>
                                        <a href='/'>Open a Case</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6'>
                                <div>
                                    <h6 className={style.socpoliciesTag}>Sell on Biztrade</h6>
                                    <div className={style.footerPoliciesdiv}>
                                        <a href='/'>About Biztrade</a>
                                        <a href='/'>Biztradebd.com Blog</a>
                                        <a href='/'>Terms & Condition</a>
                                        <a href='/'>Policies & Rules</a>
                                        <a href='/'>Privacy Policy</a>
                                        <a href='/'>Open a Case</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-2 col-md-2 col-sm-6 col-6'>

                                <div>
                                    <h6 className={style.socpoliciesTag}>Services</h6>
                                    <div className={style.footerPoliciesdiv}>
                                        <a href='/'>About Biztrade</a>
                                        <a href='/'>Biztradebd.com Blog</a>
                                        <a href='/'>Terms & Condition</a>
                                        <a href='/'>Policies & Rules</a>
                                        <a href='/'>Privacy Policy</a>
                                        <a href='/'>Open a Case</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={style.footInfofullthreeDiv}>
                    <p className={style.footInfotext}>One Stop Solution For All Business Needs </p>
                    <p className={style.footInfotext}>© 2023 Biztrade.com. All rights reserved. </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;