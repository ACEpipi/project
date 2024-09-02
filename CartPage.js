// src/CartPage.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, remove } from './cartSlice';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.items);
    const totalCost = useSelector(state => state.cart.totalCost);
    const dispatch = useDispatch();

    return (
        <div className="cart-page">
            <h2>Giỏ Hàng</h2>
            <div>
                <p>Tổng số sản phẩm: {cartItems.length}</p>
                <p>Tổng chi phí: {totalCost} VND</p>
            </div>
            <div>
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>Giá: {item.price} VND</p>
                        <p>Số lượng: {item.quantity}</p>
                        <button onClick={() => dispatch(increment(item.id))}>Tăng</button>
                        <button onClick={() => dispatch(decrement(item.id))}>Giảm</button>
                        <button onClick={() => dispatch(remove(item.id))}>Xóa</button>
                    </div>
                ))}
            </div>
            <button onClick={() => alert('Coming Soon')}>Thanh toán</button>
            <button onClick={() => window.location.href='/products'}>Tiếp tục mua sắm</button>
        </div>
    );
};

export default CartPage;
