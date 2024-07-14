import './Product.css';

import ProductImg from '../../Assets/Images/Product.png'

function Product({ title }) {
  return (
    <div className="Product">
        <div className="Product-Content">
            <img src={ProductImg} alt={`${title} Series Image`} />
            <h3>{title}</h3>
            {/* <h3>{title} Series</h3> */}
            <h3>Series</h3>
            <p>Read More</p>
        </div>
        <button>Estimate</button>
    </div>
  );
}

export default Product;