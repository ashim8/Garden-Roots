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
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                
                <h4>Order Summary</h4>
                {
                    cart.map((carts)=>(

                    <ul key={carts.id}><li >{carts.name}</li></ul>))
                }
               
                <button ><h4>Choose 1 For me</h4></button><br />
                <button onClick={()=> setCart([])}><h4>Choose Again</h4></button>
            </div>
        </div>
    );
};

export default Shop;
