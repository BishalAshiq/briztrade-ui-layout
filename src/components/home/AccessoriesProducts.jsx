"use client"
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import style from "../../app/home/home.module.css";
import Link from "next/link";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const AccessoriesProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://dummyjson.com/products");
                const data = await res.json();

                setProducts(data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 3000,
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
            <div className={style.eletronixsFulldiv}>
                <div>
                    <h3 className={style.sellerTag}>Accessories</h3>
                </div>
                <div>
                    <Slider {...settings}>
                        {products.length > 0 ? (
                            products.map((product) => (
                                
                                <Link href={`/products/${product.id}`} key={product.id}>
                                    <div key={product.id}>
                                        <div className={style.electroCard}>
                                            <div className={style.electimgdiv}>
                                                <img className={style.electimg} src={product.thumbnail} alt={product.title} style={{ width: "100%", height: "160px" }} />
                                            </div>
                                            <div className={style.electroCardText}>
                                                <span className={style.electroTitle}> {product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}</span>
                                                <span className={style.electroType}>Price:{product.price}</span>
                                                <span className={style.electroMOQ}>MOQ: {product.minimumOrderQuantity}</span>
                                            </div>

                                            <div className={style.electrocardLowerDiv}>
                                                <p className={style.electroAss}><span>
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="9" cy="9" r="9" fill="#3BEBF6" />
                                                        <path d="M13.4444 4H4.55556V5.25H13.4444V4ZM14 10.25V9L13.4444 5.875H4.55556L4 9V10.25H4.55556V14H10.1111V10.25H12.3333V14H13.4444V10.25H14ZM9 12.75H5.66667V10.25H9V12.75Z" fill="white" />
                                                    </svg>

                                                </span> {product.brand}</p>
                                                <button className={style.electrobuttn}>Send Enquiry<span>
                                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.64795 4.60453H6.77295C6.94561 4.60453 7.08545 4.46468 7.08545 4.29203V3.97953C7.08545 3.80688 6.94561 3.66703 6.77295 3.66703H3.64795C3.47529 3.66703 3.33545 3.80688 3.33545 3.97953V4.29203C3.33545 4.46468 3.47529 4.60453 3.64795 4.60453ZM3.33545 6.16702C3.33545 6.33967 3.47529 6.47952 3.64795 6.47952H6.77295C6.94561 6.47952 7.08545 6.33967 7.08545 6.16702V5.85452C7.08545 5.68186 6.94561 5.54202 6.77295 5.54202H3.64795C3.47529 5.54202 3.33545 5.68186 3.33545 5.85452V6.16702ZM5.21045 8.53282C4.88975 8.53282 4.56904 8.434 4.29521 8.23615L0.210449 5.28538V9.44825C0.210449 9.96602 0.630176 10.3857 1.14795 10.3857H9.27295C9.79072 10.3857 10.2104 9.96602 10.2104 9.44825V5.28538L6.12568 8.23615C5.85186 8.4338 5.53115 8.53282 5.21045 8.53282ZM9.85127 3.5684C9.67842 3.43285 9.51455 3.30532 9.27295 3.1229V2.26079C9.27295 1.74302 8.85322 1.3233 8.33545 1.3233H6.8208C6.76143 1.28033 6.70615 1.24009 6.64424 1.19517C6.31592 0.955526 5.66357 0.378967 5.21045 0.385802C4.75732 0.378967 4.10518 0.955526 3.77666 1.19517C3.71475 1.24009 3.65947 1.28033 3.6001 1.3233H2.08545C1.56768 1.3233 1.14795 1.74302 1.14795 2.26079V3.1229C0.906348 3.30512 0.74248 3.43285 0.569629 3.5684C0.457746 3.65608 0.367269 3.76806 0.305042 3.89586C0.242815 4.02366 0.210468 4.16394 0.210449 4.30609L0.210449 4.5141L2.08545 5.86858V2.26079H8.33545V5.86858L10.2104 4.5141V4.30609C10.2104 4.0182 10.078 3.74613 9.85127 3.5684Z" fill="white" />
                                                    </svg>
                                                </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div>   <Stack spacing={1}>
                            <Skeleton variant="rounded" width={210} height={60} />
                        </Stack></div>
                        
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default AccessoriesProducts;