import { connect } from 'react-redux';
import CourseList from '../components/common/courseList.jsx';

import { applyPriceFilter, applySearchFilter, applyCategoryFilter } from '../helpers/courseFilters.js';

const mapStateToProps = (state) => {
  const results = state.courses.results;
  const { searchString, minPrice, maxPrice, categories } = state.filters;

  return {
    courses: results.filter((result) => {
      const filters = [];
      filters.push(applyPriceFilter(result, minPrice, maxPrice));

      if (searchString) {
        filters.push(applySearchFilter(result, searchString));
      }

      if (categories.length > 0) {
        filters.push(applyCategoryFilter(result, categories));
      }

      return filters.every(item => (item === true));
    })
  };
};

const mapDispatchToProps = () => ({});

const coursesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CourseList);

export default coursesContainer;
