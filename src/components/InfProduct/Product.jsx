import React, { useState } from 'react';
import './InfProduct.css';
function Product({ product }) {
  const [value, setValue] = useState(0);
  const productSalePrice = product.sale ? (product.Price / 2).toFixed(2) : product.Price;
  const incrementValue = () => {
    setValue(value + 1);
  };

  const decrementValue = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  
  return (
    <div className='product-data'>
      <div className='foto-product-container'>
        <img className='foto-product' src={`/${product.image_path}`} alt='shoes' />
      </div>
      <div className='product-details'>
        <p className='product-title'>{product.Name}</p>
        <p className='product-description'>{product.description}</p>
        <div className="product-prices">
          <h4 className='product-price'>${productSalePrice}</h4>
          <h4 className={`${product.sale ? 'original-price' : 'original-price-h'}`}>${`${product.Price}`}</h4>
      </div> 
      <div className='add-container'>
      <div className="number-input">
        <button className="decrement" onClick={decrementValue}>-</button>
        <input className="input-number" type="text" value={value} readOnly />
        <button className="increment" onClick={incrementValue}>+</button>
        </div>
        <button className='button-add'>
          ADD TO CART
        </button>
      </div>
      </div>
    </div>
  )
}

export default Product