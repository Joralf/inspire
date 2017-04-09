import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CategoryList = ({ onHandleChange, categories, activeCategories }) => (
  <div>
    {categories.map((category) => {
      const active = activeCategories.indexOf(category) > -1;

      return (
        <Button
          onClick={() => onHandleChange(category, active)}
          key={category}
          active={active}
        >
          {category}
        </Button>
      );
    })}
  </div>
);

CategoryList.propTypes = {
  activeCategories: PropTypes.arrayOf(PropTypes.string.isRequired),
  categories: PropTypes.arrayOf(PropTypes.string.isRequired),
  onHandleChange: PropTypes.func.isRequired,
};

CategoryList.defaultProps = {
  activeCategories: [],
  categories: [],
};

export default CategoryList;
