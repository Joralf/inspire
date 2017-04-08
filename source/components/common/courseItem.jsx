import React from 'react';
import './courseItem.scss';

const CourseItem = ({ item }) => (
  <li className="card" >
    <h3>{item.name}</h3>
    <div className="card-container">
      <div>Category: {item.category}</div>
      <div>Price: {item.price}</div>
      <div>Description: {item.description}</div>
    </div>
  </li>
);

CourseItem.propTypes = {
  item: React.PropTypes.shape({}).isRequired,
};

export default CourseItem;
