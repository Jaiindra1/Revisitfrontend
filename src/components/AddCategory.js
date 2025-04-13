import React, { useState } from 'react';
import axios from 'axios';

const AddCategory = ({ onCategoryAdded }) => {
  const [name, setName] = useState('');
  const [itemCount, setItemCount] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/categories`, {
        name,
        itemCount,
        imageUrl,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      setName('');
      setItemCount('');
      setImageUrl('');
      onCategoryAdded();
    } catch (err) {
      alert('Failed to add category');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
      <h4 className="mb-3">Add New Category</h4>
      <div className="mb-3">
        <label>Category Name</label>
        <input type="text" className="form-control" required
          value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div className="mb-3">
        <label>Item Count</label>
        <input type="number" className="form-control" required
          value={itemCount} onChange={e => setItemCount(e.target.value)} />
      </div>
      <div className="mb-3">
        <label>Image URL</label>
        <input type="text" className="form-control" required
          value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Add Category</button>
    </form>
  );
};

export default AddCategory;

