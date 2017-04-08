import React, { PropTypes } from 'react';
import CourseItem from './courseItem.jsx';

const CourseList = ({ courses }) => {
  return (
    <div>
      <ul>
        {courses.map(item =>
          <CourseItem
            item={item}
            key={item.name}
          />
        )}
      </ul>
    </div>
  );
};

CourseList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  })),
};

CourseList.defaultProps = {
  courses: [],
};

export default CourseList;
