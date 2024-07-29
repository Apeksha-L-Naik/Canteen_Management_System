import React, { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import axios from 'axios';

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/orders'); // Adjust the API endpoint as needed
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <NavBar />
      <div style={{ backgroundColor: 'aliceblue', position: 'relative', height: '100vh', width: '100vw' }}>
        <div style={{ paddingTop: '100px' }}>
          <h2 style={{ marginLeft: '200px' }}>Order Details</h2>
        </div>
        <div className='orders-container' style={{ marginLeft: '80px' }}>
          {orders.length > 0 ? (
            orders.map(order => (
              <div className='order-card' key={order.tokenNumber} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
                <h5>Token Number: {order.tokenNumber}</h5>
                <p>Total Amount: Rs.{order.totalAmount}</p>
                {/* Add more order details as needed */}
              </div>
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Order;
