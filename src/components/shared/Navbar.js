"use client"
import React from 'react';
import addNav from "../../assests/nav.png"
import Image from 'next/image';
import style from "./Navbar.module.css"

const Navbar = () => {



    return (
        <div>
            <div>
                <Image className={style.fistNavimg} src={addNav} height={""} width={""} alt='' />
            </div>



            <div className='container'>
                <div className={style.dropdownNavdiv}>
                    <div className="dropdown">
                        <p className='dropdown-toggle dropdownNavP' href='/' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sell on Biztrade
                        </p>

                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <p className='dropdown-toggle dropdownNavP' href='/' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            help
                        </p>

                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <p className='dropdownNavP'>
                            About Us
                        </p>


                    </div>

                    <div className="dropdown">
                        <p href='/' className='dropdownNavP'>
                            Blog
                        </p>


                    </div>

                    <div className="dropdown">
                        <p className='dropdownNavP' href='/' type="button">
                            Sign In
                        </p> 
                    </div>

                    <div className="dropdown">
                        <p className='dropdown-toggle dropdownNavP' href='/' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Register
                        </p>

                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>

                    <div className={style.accountNav}>
                        <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.99978 4.40043C5.21491 4.40043 6.19999 3.41536 6.19999 2.20022C6.19999 0.985072 5.21491 0 3.99978 0C2.78463 0 1.79956 0.985072 1.79956 2.20022C1.79956 3.41536 2.78463 4.40043 3.99978 4.40043Z" fill="#292D32" />
                            <path d="M4.00001 5.50049C1.79538 5.50049 0 6.97903 0 8.80081C0 8.92402 0.0968095 9.02083 0.220022 9.02083H7.77998C7.90319 9.02083 8 8.92402 8 8.80081C8 6.97903 6.20462 5.50049 4.00001 5.50049Z" fill="#292D32" />
                        </svg>

                        <span className='dropdownNavP' href='/' >
                            Account
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;