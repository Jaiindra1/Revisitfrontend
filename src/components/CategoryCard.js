import React from 'react';
import EditCategory from './EditCategory';

const CategoryCard = ({ category, onCategoryUpdated }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={category.imageUrl}
        className="card-img-top"
        alt={category.name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{category.name}</h5>
        <p className="card-text">{category.itemCount} items</p>
        <EditCategory category={category} onCategoryUpdated={onCategoryUpdated} />
      </div>
    </div>
  );
};

export default CategoryCard;
