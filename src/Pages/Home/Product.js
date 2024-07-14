import './Product.css';

import Product1Img from '../../Assets/Images/ProductImg1.webp'
import Product2Img from '../../Assets/Images/ProductImg2.png'

function Product({ title }) {
  return (
    <div className="Product">
        <img src={Product1Img} alt={`${title} Series Image`} />
        <h3>{title}</h3>
        <h3>Series</h3>
        <button className='Product-Estimate-Button'>Estimate</button>
        <button className='Product-Read-More-Button'>Read More</button>
    </div>
  );
}

export default Product;