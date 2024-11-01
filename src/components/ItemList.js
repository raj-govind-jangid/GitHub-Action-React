import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/items`);
    setItems(response.data);
  };

  const deleteItem = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/items/${id}`);
    setItems(items.filter(item => item._id !== id));
  };

  return (
    <div>
      <h2>Item List</h2>
      <Link to="/add">Add New Item</Link>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {item.name}
            <button style={{marginLeft:"10px"}} onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
