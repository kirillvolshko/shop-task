import React from 'react'
import './CardProduct.css'
function CardProduct({ product}) {
    const productSalePrice = product.sale ? (product.Price / 2).toFixed(2) : product.Price;
  return (
    <div key={product.id}>
      <div className='product-image-container'>
      <div className={`${product.sale ? 'sale-flag' : 'sale-flag-h'}`}>Sale 50%</div>
        <img className='product-foto' src={`${product.image_path}`} alt='shoes'/>
      </div>
      <p className='product-name'>{product.Name}</p>
      <div className="product-prices">
        <h4 className={`${product.sale ? 'original-price' : 'original-price-h'}`}>${`${product.Price}`}</h4>
        <h4>${productSalePrice}</h4>
      </div> 
    </div>
  )
}

export default CardProduct