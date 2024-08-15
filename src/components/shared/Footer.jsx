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
            <div className={style.footInfofullOneDiv}>
                <div className='container'>
                    <div className={style.footInfoOneDiv}>
                        <div className={style.footInfocard}>
                            <Image src={ff5} height={"48px"} width={"48px"} alt={""} />
                            <span className={style.footInfoctext}>Great Value</span>
                            <p className={style.footInfopara}>We offer competitive prices
                                on over 100 million items
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
        </div>
    );
};

export default Footer;