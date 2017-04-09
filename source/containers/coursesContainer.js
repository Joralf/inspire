import { connect } from 'react-redux';
import CourseList from '../components/common/courseList.jsx';

const mapStateToProps = (state) => {
  const results = state.courses.results;
  const { searchString, minPrice, maxPrice } = state.filters;
  const searchFilterString = searchString ? searchString.toLowerCase() : ''; // convert to lowercase for usability

  return {
    courses: results.filter((result) => {
      const name = result.name.toLowerCase();
      const description = result.description.toLowerCase();
      const price = result.price;

      return (
        // name or description contains searchFilterString
        (name.indexOf(searchFilterString) > -1 || description.indexOf(searchFilterString) > -1)
        // and price is within minPrice and maxPrice
        && (price >= minPrice && price <= maxPrice)
      );
    })
  };
};

const mapDispatchToProps = () => ({});

const coursesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CourseList);

export default coursesContainer;
