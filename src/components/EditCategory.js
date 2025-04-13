import React, { useState } from 'react';
import axios from 'axios';

const EditCategory = ({ category, onCategoryUpdated }) => {
  const [name, setName] = useState(category.name);
  const [itemCount, setItemCount] = useState(category.itemCount);
  const [imageUrl, setImageUrl] = useState(category.imageUrl);

  const handleUpdate = async () => {
    await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/categories/${category._id}`, {
      name,
      itemCount,
      imageUrl
    }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    onCategoryUpdated();
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
<input value={itemCount} onChange={(e) => setItemCount(e.target.value)} />
<input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

      <button onClick={handleUpdate}>Edit</button>
    </div>
  );
};

export default EditCategory;
