import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

import CourseItem from './courseItem.jsx';

const CourseList = ({ courses }) => (
  <Row>
    {courses.map(item =>
      <Col xs={12} sm={12} md={4} key={item.name}>
        <CourseItem
          item={item}
        />
      </Col>
    )}
  </Row>
);

CourseList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })),
};

CourseList.defaultProps = {
  courses: [],
};

export default CourseList;
