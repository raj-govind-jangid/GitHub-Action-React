import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const addItem = async () => {
    await axios.post('http://localhost:5000/api/items', { name });
    navigate('/');
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default AddItem;
