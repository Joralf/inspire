import { connect } from 'react-redux';
import CourseList from '../components/common/courseList.jsx';

const mapStateToProps = (state, ownProps) => {
  const { results, searchText } = state.courses;
  return {
    courses: results.filter((result) => result.name.startsWith(searchText))
  }
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
