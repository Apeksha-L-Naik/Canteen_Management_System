import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Caurosal from './Caurosal';

const FastFood = () => {
  const [fastfoodItems, setFastfoodItems] = useState([]);

  useEffect(() => {
    const fetchFastfoodItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/menu');
        const fastfoodItems = response.data.filter(item => item.category === 'fastfood');
        setFastfoodItems(fastfoodItems);
      } catch (error) {
        console.error('Error fetching breakfast items:', error);
      }
    };

    fetchFastfoodItems();
  }, []);

  return (
    <div>
        <Caurosal/>
      <h1 style={{marginLeft:'400px'}}>Fastfood Menu</h1>
      <ul style={{margin:'0px 100px 0px 400px',listStyle:'none'}}>
        {fastfoodItems.map((item) => (
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
            <p>Price: ${item.price}</p>
            </div>
            </div>
            <button style={{
                    backgroundColor:"#D9534f",borderRadius:10,border:'none',width:'120px',height:'50px',cursor:'pointer',color:'white',fontWeight:'bolder',backgroundColor:'red'
                  }} >
                    Add to cart
                  </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FastFood;
