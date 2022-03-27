import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        if((newCart.length<=4)){
            setCart(newCart);
        }
        else{
            alert("You cann't add more than 4 items!");
        }
        
    };
}
export default Shop;
