"use client"; // Ensure this is used for client components in the app directory

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProductDetails = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);

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

    if (!product) return <p>Loading...</p>;

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.thumbnail} alt={product.title} style={{ width: "300px", height: "300px" }} />
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <p>Brand: {product.brand}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default ProductDetails;
