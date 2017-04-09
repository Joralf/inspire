import { connect } from 'react-redux';
import CourseList from '../components/common/courseList.jsx';

const mapStateToProps = (state, ownProps) => {
  const { results, searchText, minPrice, maxPrice } = state.courses;
  return {
    courses: results.filter((result) => {
      const name = result.name.toLowerCase();
      const description = result.description.toLowerCase();
      const searchFilter = searchText ? searchText.toLowerCase() : '';
      const price = result.price;

      return (
        (name.indexOf(searchFilter) > -1 ||
        description.indexOf(searchText) > -1) && (price > minPrice && price <= maxPrice)
      );
    })
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

const coursesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CourseList);

export default coursesContainer;
