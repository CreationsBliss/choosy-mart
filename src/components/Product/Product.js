import React from 'react';
import './Product.css';
import { BsCartPlus } from 'react-icons/bs';

const Product = (props) => {
  const {image, name, price} = props.product;
  return (
    <div>
      <div className='single-product-container'>
        <img src={image} alt="product pic" className='img-fluid' />
        <div className="single-product-info">
          <h5 className='mt-3'>{name}</h5>
          <p>${price}</p>
          <button className='cart-btn'>ADD TO CART <BsCartPlus className='ms-3'></BsCartPlus> </button>
        </div>
      </div>
    </div>
  );
};

export default Product;