import { Link } from 'react-router-dom';

import './Product.css';

import Product1Img from '../../Assets/Images/ProductImg1.webp'
// import Product2Img from '../../Assets/Images/ProductImg2.png'

function Product({ title }) {
  return (
    <div className="Product">
        <img src={Product1Img} alt={`${title} Series`} />
        <h3>{title}</h3>
        <h3>Series</h3>
        <Link to="/e-commerce-website/instant-estimate" ><button className='Product-Estimate-Button'>Estimate</button></Link>
        <button className='Product-Read-More-Button'>Read More</button>
    </div>
  );
}

export default Product;