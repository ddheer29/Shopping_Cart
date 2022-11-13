import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Products = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('https://fakestoreapi.com/products?sort=desc');
            const data = await res.json();
            console.log(data);
            setProducts(data);
        }
        fetchProducts();
    }, []);

    const handleAdd = (product) => {
        // store this product in redux store
        // action dispatch krna hoga wo action reducer ko call krti hai
        dispatch(add(product));
    };

    return (
        <div className='productsWrapper'>
            {
                products.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={product.image} alt="img" />
                        <h4>{product.title}</h4>
                        <h5>${product.price}</h5>
                        <button onClick={() => handleAdd(product)} className='btn'>
                            Add to Cart
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products