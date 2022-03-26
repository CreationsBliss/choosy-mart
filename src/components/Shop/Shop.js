import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

  const[products, setProducts] = useState([]);
  const[cart, setCart] = useState([]);

  useEffect(() =>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[]);

  const handleAddToCart = (productName) =>{
    const newCart = [...cart, productName];
    setCart(newCart);
  }

  const handleChooseBtn = () =>{
    const newCart =  cart[Math.floor(Math.random() * cart.length)];
    setCart(newCart);
  }

  const handleResetBtn = () =>{
    const newCart = [];
    setCart(newCart);
  }

  return (
    <div>
      <div className="container shop-container">
        <div className="row">
          <div className="col-xl-8">
            <div className="single-product">
              {
                products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
              }
            </div>
          </div>
          <div className="col-xl-4">
            <div className="cart-container">
              <h3 className='mb-4'>Selected items</h3>
              <h5> {cart} </h5>
              <button className='choose-btn mt-4' onClick={handleChooseBtn}>Choose 1 for me</button>
              <br />
              <button className='reset-btn mt-4' onClick={handleResetBtn}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;