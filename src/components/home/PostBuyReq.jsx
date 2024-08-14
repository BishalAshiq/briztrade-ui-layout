import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import style from "../../app/home/home.module.css";
import postbuyImg from "../../assests/postbuy.png"

const PostBuyReq = () => {
    return (
        <div>
            <div className={style.PostBuyReqfulldiv}>
                <div className='row'>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6'>
                        <div className={style.PostBuyReqfimgdiv}>
                            <img className={style.PostBuyReqimg} src={postbuyImg.src} alt='' />
                        </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6'>
                        <div>
                            <div className={style.postbytextinpdiv}>
                                <h1>Post Buy Requirement</h1>
                                <p>Get the Best Deals and Exclusive Offers with Biztrade</p>
                                <Box sx={{ width: 300 }}>
                                    <Slider
                                        size="small"
                                        defaultValue={40}
                                        aria-label="Small"
                                        valueLabelDisplay="auto"
                                        sx={{
                                            '& .MuiSlider-thumb': {
                                                background: 'linear-gradient(180deg, #F5970A 0%, #FB7A31 100%)',
                                            },
                                            '& .MuiSlider-track': {
                                                background: 'linear-gradient(180deg, #F5970A 0%, #FB7A31 100%)',
                                            },
                                            '& .MuiSlider-rail': {
                                                backgroundColor: '#ccc', // Default color for the rail
                                            },
                                        }}
                                    />

                                </Box>
                                <p>Tell us about your requirement*</p>

                                <div >
                                    <form action="/">
                                        <div className={style.productInputicondiv}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.53582 19.0716C4.27949 19.0716 0 14.7921 0 9.53582C0 4.27949 4.27949 0 9.53582 0C14.7921 0 19.0716 4.27949 19.0716 9.53582C19.0716 14.7921 14.7921 19.0716 9.53582 19.0716ZM9.53582 1.39549C5.04235 1.39549 1.39549 5.05166 1.39549 9.53582C1.39549 14.02 5.04235 17.6761 9.53582 17.6761C14.0293 17.6761 17.6761 14.02 17.6761 9.53582C17.6761 5.05166 14.0293 1.39549 9.53582 1.39549Z" fill="#CCCCCC" />
                                                <path d="M19.3045 20.0019C19.1277 20.0019 18.951 19.9367 18.8114 19.7972L16.9508 17.9365C16.681 17.6667 16.681 17.2202 16.9508 16.9504C17.2206 16.6806 17.6671 16.6806 17.9369 16.9504L19.7975 18.811C20.0673 19.0808 20.0673 19.5274 19.7975 19.7972C19.658 19.9367 19.4812 20.0019 19.3045 20.0019Z" fill="#CCCCCC" />
                                            </svg>

                                            <input className={style.productInput} type="search" placeholder='Enter the product you are looking for' />
                                        </div>
                                        <button type="submit" className={style.productInputbtn}>Continue</button>
                                    </form>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostBuyReq;