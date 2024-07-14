import './Products.css';

import Product from './Product'

function Products({ Items }) {
  return (
    <div className="Products">
        {Items.map((item) => (
            <Product title={item.title}/>
        ))}
    </div>
  );
}

export default Products;