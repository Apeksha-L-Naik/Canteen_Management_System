import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/menu');
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

  const renderCategory = (category) => {
    const filteredItems = menuItems.filter(item => item.category === category);

    if (filteredItems.length === 0) {
      return <p>No items available in this category.</p>;
    }

    return (
      <ul>
        {filteredItems.map((item) => (
          <li key={item._id}>
            <h2>{item.name}</h2>
            <img src={`http://localhost:5000/${item.image}`} alt={item.name} width="200" />
            <p>{item.available ? 'Available' : 'Out of Stock'}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>Menu</h1>
      <h2>Breakfast</h2>
      {renderCategory('breakfast')}
      <h2>Beverages</h2>
      {renderCategory('beverages')}
      <h2>Non-Veg</h2>
      {renderCategory('nonveg')}
      {/* Add other categories as needed */}
    </div>
  );
};

export default Menu;
