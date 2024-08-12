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
import Image from 'next/image';
// import topCategoriSVG from '@/assests/svg-components/topCategoriSVG';

const Banner = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12'>
                    <div>
                        <div>
                            <h3>Top Categories</h3>
                            <div className={style.topCategorydiv}>
                                <div className={style.topCategories}>
                                    <Image src={topcat1} height={""} width={""} alt='' />
                                    <span>
                                        RMG & Accessories
                                    </span>
                                </div>
                               
                                <div className={style.topCategories}>
                                <Image src={topcat2} height={""} width={""} alt='' />
                                    <span>
                                    Leather &  Leather...
                                    </span>
                                </div>

                                <div className={style.topCategories}>
                                <Image src={topcat3} height={""} width={""} alt='' />
                                    <span>
                                    Jute & Jute Produc...
                                    </span>
                                </div>

                                <div className={style.topCategories}>
                                <Image src={topcat4} height={""} width={""} alt='' />
                                    <span>
                                    Agro & Agro Based...
                                    </span>
                                </div>

                                <div className={style.topCategories}>
                                <Image src={topcat5} height={""} width={""} alt='' />
                                    <span>
                                    Home Textiles, Kitc...
                                    </span>
                                </div>

                                <div className={style.topCategories}>
                                <Image src={topcat6} height={""} width={""} alt='' />
                                    <span>
                                    Handicraft & Handl...
                                    </span>
                                </div>

                                <div className={style.topCategories}>
                                <Image src={topcat7} height={""} width={""} alt='' />
                                    <span>
                                    Food & Beverages...
                                    </span>
                                </div>

                                <div className={style.topCategories}>
                                <Image src={topcat8} height={""} width={""} alt='' />
                                    <span>
                                    Furniture and Furnit...
                                    </span>
                                </div>

                                <div className={style.topCategories}>
                                <Image src={topcat9} height={""} width={""} alt='' />
                                    <span>
                                    Building materials &...
                                    </span>
                                </div>

                                <div className={style.topCategories}>
                                <Image src={topcat10} height={""} width={""} alt='' />
                                    <span>
                                    Books, Stationary &...
                                    </span>
                                </div>

                                <div className={style.topCategories}>
                                <Image src={topcat11} height={""} width={""} alt='' />
                                    <span>
                                    Consumer Electroni...
                                    </span>
                                </div>

                                <div className={style.topCategories}>
                                <Image src={topcat12} height={""} width={""} alt='' />
                                    <span>
                                    Fashion, Beauty & P...
                                    </span>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
                <div className='col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12'>


                </div>
            </div>
        </div>
    );
};

export default Banner;