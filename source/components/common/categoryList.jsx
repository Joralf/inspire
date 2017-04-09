import React, { PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const CategoryList = ({ onHandleChange, categories }) => (
  <div>
    {categories.map((category) => {
      return (
        <Button
          onClick={() => onHandleChange(category)}
          key={category.name}
          active={category.active}
        >
          {category.name}
        </Button>
      );
    })}
  </div>
);

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  })),
  onHandleChange: PropTypes.func.isRequired,
};

CategoryList.defaultProps = {
  categories: [],
};

export default CategoryList;
