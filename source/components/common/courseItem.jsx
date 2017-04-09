import React from 'react';
import PropTypes from 'prop-types';

import './courseItem.scss';

const CourseItem = ({ item }) => (
  <div className="card" >
    <h3>{item.name}</h3>
    <div>Category: {item.category}</div>
    <div>Price: &euro;{item.price},-</div>
    <div>Description: {item.description}</div>
  </div>
);

CourseItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CourseItem;
