import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './InfProduct.css';
import Product from './Product';
import { useNavigate } from 'react-router-dom';


function InfProduct() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
      fetch('http://161.35.206.213:3000/api/products')
        .then((response) => response.json())
        .then((data) => {
            setProducts(data);
            
        })
        .catch((error) => {
          console.error('Error:', error);
          navigate('/error');
          setProducts();
        });
   
  }, []);

  const product = Array.isArray(products) ? products.find((product) => product.url_key === id) : null;

  return (
    <div className='container'>
      <div className='product-container-menu'>
        <div className='back-button-container'>
          <Link to={`/`}>
            <button className='back-button'>&#10229; Back to shop</button>
          </Link>
        </div>
        <div className='menu-item-images'>
          <img alt='img' src='/images/5.jpg' />
          <img alt='img' src='/images/4.jpg' />
        </div>
      </div>
      <div>
        {product ? (
          <Product product={product} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default InfProduct;
