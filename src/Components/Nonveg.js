import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Caurosal from './Caurosal';
import Cart from './Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nonveg = () => {
  const [nonvegItems, setNonvegItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchNonvegItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/menu');
        const nonvegItems = response.data.filter(item => item.category === 'nonveg');
        setNonvegItems(nonvegItems);
      } catch (error) {
        console.error('Error fetching breakfast items:', error);
      }
    };

    fetchNonvegItems();
  }, []);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem._id === item._id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    setTotal((prevTotal) => prevTotal + item.price);
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem._id === item._id);
      if (existingItem.quantity === 1) {
        return prevCart.filter(cartItem => cartItem._id !== item._id);
      } else {
        return prevCart.map(cartItem =>
          cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        );
      }
    });
    setTotal((prevTotal) => prevTotal - item.price);
  };

  useEffect(() => {
    console.log("Cart updated: ", cart); // Debugging
    console.log("Total updated: ", total); // Debugging
  }, [cart, total]);

  return (
    <div>
        <Caurosal/>
        <div className="row" style={{padding:'20px'}}>
        <div className="col-md-4" style={{paddingTop:'40px',}}>
          <Cart cart={cart} total={total} addToCart={addToCart} removeFromCart={removeFromCart} />
        </div>
        <div className="col-md-8">
      <h1 style={{marginLeft:'0px'}}>NonVeg Menu</h1>
      <ul style={{margin:'0px 100px 0px 0px',listStyle:'none'}}>
        {nonvegItems.map((item) => (
          <li key={item._id} style={{display:'flex',alignItems:'center',justifyContent:'space-between',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',marginTop:'20px',padding:'20px',borderRadius:10}}>
            <div style={{display:'flex'}}>
             <div>   
            <img src={`http://localhost:5000/${item.image}`} alt={item.name} style={{
                width: '150px',
                height: '100px',
                objectFit: 'cover',
                borderRadius: '5px'}}/>            
            </div>
            <div style={{padding:'0px 0px 0px 60px'}}>
            <h2 style={{ margin: '0 0 10px 0' }}>{item.name}</h2>
            <p style={{ margin: '0', color: item.available ? 'green' : 'red' }}>
                {item.available ? 'Available' : 'Out of Stock'}</p>
            <p>Price: ${item.price}-</p>
            </div>
            </div>
            <button style={{borderRadius:10,border:'none',width:'120px',height:'50px',cursor:'pointer',color:'white',fontWeight:'bolder',backgroundColor:'red'
                  }} onClick={() => addToCart(item)}>
                    Add to cart
                  </button>
          </li>
        ))}
      </ul>
      </div>
      </div>
    </div>
  );
};

export default Nonveg;
