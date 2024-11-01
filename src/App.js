import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>CRUD App hot fix 1</h1>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/add" element={<AddItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
