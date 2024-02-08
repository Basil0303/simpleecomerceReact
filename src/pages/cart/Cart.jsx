import React, { useContext } from 'react';
import { PRODUCTS } from '../../Products';
import { ShopContext } from '../../context/Shop-context';
import CartItems from './Cart-Items.jsx';
import "./Cart.css";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((Product) => {
          if (cartItems[Product.id] !== 0) {
            return <CartItems key={Product.id} data={Product} />;
          }
          return null; // Return null if cart item is 0
        })}
        {Object.values(cartItems).every(amount => amount === 0) && (
          <h1>Your checkout is empty</h1>
        )}
      </div>
      <div className="checkout">
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
