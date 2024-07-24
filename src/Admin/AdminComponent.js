import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [name, setName] = useState('');
  const [available, setAvailable] = useState(true);
  const [category, setCategory] = useState('breakfast'); // Default category
  const [image, setImage] = useState(null);

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/menu');
      setMenuItems(response.data);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('available', available);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:5000/api/menu', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      fetchMenuItems(); // Refresh the list of menu items
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const toggleAvailability = async (id, currentAvailability) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/menu/${id}`, {
        available: !currentAvailability,
      });
      console.log(response.data);
      setMenuItems((prevItems) =>
        prevItems.map((item) =>
          item._id === id ? { ...item, available: !currentAvailability } : item
        )
      ); // Update state locally to reflect changes
    } catch (error) {
      console.error('Error updating availability:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
         <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />{' '}
        Available
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="breakfast">Breakfast</option>
          <option value="fastfood">Fast Food</option>
          <option value="dessert">Dessert</option>
          <option value="beverage">Beverages</option>
          <option value="nonveg">Non-Veg</option>
          {/* Add other categories as needed */}
        </select>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
        <button type="submit">Add Menu Item</button>
      </form>
      <ul>
        {menuItems.map((item) => (
          <li key={item._id}>
            <h2>{item.name}</h2>
            <img src={`http://localhost:5000/${item.image}`} alt={item.name} width="200" />
            <p>Price: ${item.price}</p>
            <label>
              <input
                type="checkbox"
                checked={item.available}
                onChange={() => toggleAvailability(item._id, item.available)}
              />
              Available
            </label>
            <p>Category: {item.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
