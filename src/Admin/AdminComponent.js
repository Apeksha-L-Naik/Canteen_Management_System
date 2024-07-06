import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminComponent = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [currentItem, setCurrentItem] = useState("");
  const [currentImage, setCurrentImage] = useState(null); // Change from "" to null
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/menu');
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
        alert('Error fetching menu items');
      }
    };
    fetchMenu();
  }, []);

  const handleInputChange = (event) => {
    setCurrentItem(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setCurrentImage(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('item', currentItem);
    if (currentImage) {
      formData.append('image', currentImage);
    }

    try {
      const method = isUpdate ? 'put' : 'post';
      const url = isUpdate ? `http://localhost:8080/api/menu/${updateIndex}` : 'http://localhost:8080/api/menu';

      await axios({
        method: method,
        url: url,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      alert(`Menu item ${isUpdate ? 'updated' : 'added'} successfully!`);
      setCurrentItem("");
      setCurrentImage(null); // Reset currentImage
      setIsUpdate(false);
      setUpdateIndex(null);

      const response = await axios.get('http://localhost:8080/api/menu');
      setMenuItems(response.data);
    } catch (error) {
      alert(`Error ${isUpdate ? 'updating' : 'adding'} menu item`);
    }
  };

  const handleOutOfStock = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/menu/out-of-stock/${id}`);
      alert('Menu item marked as out of stock!');
      const response = await axios.get('http://localhost:8080/api/menu');
      setMenuItems(response.data);
    } catch (error) {
      console.error('Error:', error);
      alert('Error marking menu item as out of stock');
    }
  };

  const handleUpdateClick = (index) => {
    setCurrentItem(menuItems[index].item);
    setCurrentImage(menuItems[index].image);
    setIsUpdate(true);
    setUpdateIndex(menuItems[index]._id);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentItem}
          onChange={handleInputChange}
          placeholder="Enter menu item"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {currentImage && typeof currentImage === 'string' && (
          <img src={currentImage} alt="Preview" style={{ width: "100px", height: "100px" }} />
        )}
        <button type="submit">{isUpdate ? 'Update' : 'Add'} Menu Item</button>
      </form>
      <h2>Menu Items</h2>
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            {menuItem.item} - {menuItem.avail ? "Available" : "Out of Stock"}
            <img src={`http://localhost:8080${menuItem.image}`} alt={menuItem.item} style={{ width: "100px", height: "100px" }} />
            <button onClick={() => handleUpdateClick(index)}>Update</button>
            <button onClick={() => handleOutOfStock(menuItem._id)}>Mark as Out of Stock</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminComponent;
