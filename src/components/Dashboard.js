import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryCard from './CategoryCard';
import AddCategory from './AddCategory';

const Dashboard = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/categories`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    });
    setCategories(res.data);
  };
  

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Category Dashboard</h2>
      <AddCategory onCategoryAdded={fetchCategories} />
      <div className="row mt-4">
        {categories.map((cat) => (
          <div className="col-md-4 mb-4" key={cat._id}>
            <CategoryCard category={cat} onCategoryUpdated={fetchCategories} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
