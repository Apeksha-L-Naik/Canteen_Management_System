import React from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderSuccessful = () => {
  const location = useLocation();
  const { cart, total, token } = location.state || { cart: [], total: 0, token: '' };

  return (
    <div className="order-successful" style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:'400px',padding:'50px',marginLeft:'580px',marginTop:'150px',borderRadius:'50'}}>
      <h2 style={{color:'green'}}>Order Successful</h2>
      <p>Your order has been placed successfully!</p>
      <p>Token Number: <strong>{token}</strong></p>
      <h3>Order Details:</h3>
      <ul>
        {cart.map((item) => (
          <li key={item._id} className="order-item">
            <div>{item.name} - ₹{item.price} x {item.quantity}</div>
          </li>
        ))}
      </ul>
      <h3>Total: ₹{total}</h3>
      <style>
        {`
        body{
        background-color:red;
                }
        .order-successful {
        background-color:white;
          margin: 20px;
          background-color:white;
        }
        .order-item {
          border-bottom: 1px solid #ddd;
          padding: 10px 0;
        }
        .order-item:last-child {
          border-bottom: none;
        }
        `}
      </style>
    </div>
  );
};

export default OrderSuccessful;
