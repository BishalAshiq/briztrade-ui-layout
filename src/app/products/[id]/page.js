"use client";
import Skeleton from '@mui/material/Skeleton';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import style from "./products.module.css";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from "next/link";

const MUstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };


    if (!product) return <div>   <Stack spacing={1}>
        <Skeleton variant="rounded" width={210} height={60} />
    </Stack></div>;

    return (
        <div>

            <div className='container single-products'>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div>
                            <img src={product.thumbnail} alt={product.title} style={{ width: "300px", height: "300px" }} />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div>
                            <h1>{product.title}</h1>

                            <p>{product.description}</p>
                            <Rating name="size-small" defaultValue={2} size="small" />
                            <p>Price: ${product.price * quantity}</p>
                            <p>Brand: {product.brand}</p>
                        </div>

                        <div className={style.inDecreasedbtndivfull}>
                            <div className={style.inDecreasedbtndiv}>
                                <span className={style.inDecreasedbtn} onClick={decreaseQuantity}>-</span>
                                <span>{quantity}</span>
                                <span className={style.inDecreasedbtn} onClick={increaseQuantity}>+</span>
                            </div>
                            <div>
                                <button className={style.AddToCartbtn} onClick={handleOpen}>Add To Cart</button>
                                <Modal
                                    aria-labelledby="transition-modal-title"
                                    aria-describedby="transition-modal-description"
                                    open={open}
                                    onClose={handleClose}
                                    closeAfterTransition
                                    slots={{ backdrop: Backdrop }}
                                    slotProps={{
                                        backdrop: {
                                            timeout: 500,
                                        },
                                    }}
                                >
                                    <Fade in={open}>
                                        <Box sx={style}>
                                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                                Text in a modal
                                            </Typography>
                                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                            </Typography>
                                        </Box>
                                    </Fade>
                                </Modal>
                            </div>
                        </div>
                    </div>

                </div>

               
            </div>

            {/* <h1>{product.title}</h1>
     
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Brand: {product.brand}</p> */}
            {/* Add more details as needed */}
        </div>
    );
};

export default ProductDetails;
