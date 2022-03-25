import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

  const[products, setProducts] = useState([]);

  useEffect(() =>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  return (
    <div>
      <div className="container shop-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="single-product">
              {
              products.map(product => <Product key={product.id} product={product}></Product>)
              }
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cart-container">
              <h2>Selected items</h2>
              <h5>Product name:</h5>
              <button className='choose-btn mt-4'>Choose 1 for me</button>
              <br />
              <button className='reset-btn mt-4'>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;