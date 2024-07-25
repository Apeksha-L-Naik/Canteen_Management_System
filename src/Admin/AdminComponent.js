import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [name, setName] = useState('');
  const [available, setAvailable] = useState(true);
  const [category, setCategory] = useState('breakfast'); // Default category
  const [price, setPrice] = useState(''); 
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

    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }

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

  const deleteMenuItem = async (id) => {
    console.log('Deleting menu item with ID:', id);
    try {
      const response = await axios.delete(`http://localhost:5000/api/menu/${id}`);
      console.log(response.data);
      setMenuItems((prevItems) => prevItems.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Error deleting menu item:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ padding: '20px' }}>
        <h2>Food Category</h2>
      </div>
      <form onSubmit={handleSubmit} style={{ border: '2px solid black', padding: '20px', display: 'flex', justifyContent: 'space-evenly' }}>
        <div>
          <input
            type="text"
            id='text'
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="number"
            id='number'
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="checkbox"
            id='checkbox'
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
          />{' '}
          Available
        </div>
        <div>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="breakfast">Breakfast</option>
            <option value="fastfood">Fast Food</option>
            <option value="dessert">Dessert</option>
            <option value="beverage">Beverages</option>
            <option value="nonveg">Non-Veg</option>
            <option value="chats">Chats</option>
          </select>
        </div>
        <div>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
          <button type="submit">Add Menu Item</button>
        </div>
      </form>
      <ul style={{ listStyle: 'none' }}>
        {menuItems.map((item) => (
          <li key={item._id}>
            <div style={{ display: 'flex', borderBottom: '1px solid black', padding: '20px', alignItems: 'center', justifyContent: 'space-evenly' }}>
              <div>
                <img src={`http://localhost:5000/${item.image}`} alt={item.name} width="200" />
              </div>
              <div>
                <h2>{item.name}</h2>
              </div>
              <div>
                <p>Price: Rs.{item.price}</p>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={item.available}
                    onChange={() => toggleAvailability(item._id, item.available)}
                  />
                  Available
                </label>
              </div>
              <div>
                <p>Category: {item.category}</p>
              </div>
              <div>
                <button onClick={() => deleteMenuItem(item._id)}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
