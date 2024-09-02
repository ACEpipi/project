// src/ProductList.js

import React from 'react';
import products from './products'; // Import danh sách sản phẩm
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice'; // Giả sử bạn đã tạo cartSlice

const ProductList = () => {
    const dispatch = useDispatch();

    // Lấy danh sách các danh mục không trùng lặp
    const categories = [...new Set(products.map(product => product.category))];

    // Hàm xử lý khi thêm sản phẩm vào giỏ hàng
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className="product-list">
            {/* Lặp qua từng danh mục */}
            {categories.map(category => (
                <div key={category} className="category-section">
                    <h2>{category}</h2>
                    <div className="category-products">
                        {/* Lọc và hiển thị sản phẩm theo từng danh mục */}
                        {products.filter(product => product.category === category).map(product => (
                            <div key={product.id} className="product-item">
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>Giá: {product.price} VND</p>
                                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
