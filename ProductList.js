import React from 'react';
import products from './products';

const ProductList = () => {
    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-item">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>Giá: {product.price} VND</p>
                    <button>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
