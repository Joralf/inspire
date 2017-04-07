import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const renderCategory = (category => (
  <Button>
    {category}
  </Button>
));

const CategoryList = ({ categories }) => (
  <ButtonGroup>
    {categories.map(renderCategory)}
  </ButtonGroup>
);

CategoryList.propTypes = {
  categories: React.PropTypes.shape([]).isRequired,
};

export default CategoryList;
