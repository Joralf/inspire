import { connect } from 'react-redux';
import CourseList from '../components/common/courseList.jsx';

const mapStateToProps = (state) => {
  const { results, searchString, minPrice, maxPrice } = state.courses;
  const searchFilter = searchString ? searchString.toLowerCase() : ''; // convert to lowercase for usability

  return {
    courses: results.filter((result) => {
      const name = result.name.toLowerCase();
      const description = result.description.toLowerCase();
      const price = result.price;

      return (
        // name or description contains searchFilter
        (name.indexOf(searchFilter) > -1 || description.indexOf(searchFilter) > -1)
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
