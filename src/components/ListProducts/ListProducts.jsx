import React, {useState, useEffect} from 'react'
import CardProduct from '../CardProduct/CardProduct'
import { Link } from 'react-router-dom'
import './ListProducts.css'
import Menu from '../Menu/Menu';
import { useNavigate } from 'react-router-dom';
function ListProducts() {
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
    });}, []);
  return (
    <div>
    <div className='menu-list'>
       <Menu/> 
    </div>
    <div className="product-list">
       {products.map(product => (
        <Link to={`/products/${product.url_key}`} key={product.id} product={product}>
        <CardProduct  product={product} />
        </Link>
      ))}
    </div>
    </div>
  )
}

export default ListProducts