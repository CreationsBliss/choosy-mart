import React from 'react';

const Product = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8"></div>
          <div className="col-lg-4">
            <h2>Selected items</h2>
            <h5>Product name:</h5>
            <button className='btn btn-info mt-4'>Choose 1 for me</button>
            <br />
            <button className='btn btn-danger mt-4'>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;