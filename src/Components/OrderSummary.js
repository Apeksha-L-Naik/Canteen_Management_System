import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, total } = location.state || { cart: [], total: 0 };

  const handlePlaceOrder = () => {
    // Generate a token (for example purposes, use a random number)
    const token = Math.floor(Math.random() * 1000000);

    // Navigate to the OrderSuccessful page with order details and token
    navigate('/order-successful', { state: { cart, total, token } });
  };

  return (
    <div className="order-summary" style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",width:'400px',padding:'50px',marginLeft:'580px',marginTop:'150px',borderRadius:'50'}}>
      <h2 style={{color:'red'}}>Order Summary</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item._id} className="order-item">
                <div>{item.name} - ₹{item.price} x {item.quantity}</div>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{total}</h3>
          <div>
            <label htmlFor="payment-mode" style={{marginRight:'20px'}}>Mode of Payment:</label>
            <select id="payment-mode">
              <option value="cash">Cash</option>
              <option value="online">Online</option>
            </select>
          </div>
          <button
            style={{
              backgroundColor: "red",
              borderRadius: 10,
              color: "white",
              marginTop: 10,
              border:'none',
              padding:'10px',
              fontWeight:'bold'
            }}
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      )}

      <style>
        {`
        body{
         background-image:url('https://wallpaperaccess.com/full/1324862.jpg');
         object-fit:cover;
        }
        .order-summary {
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

export default OrderSummary;
