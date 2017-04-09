import { connect } from 'react-redux';
import CourseList from '../components/common/courseList.jsx';

const mapStateToProps = (state, ownProps) => {
  const { results, searchText } = state.courses;
  return {
    courses: results.filter((result) => {
      const name = result.name.toLowerCase();
      const description = result.description.toLowerCase();

      return (
        name.indexOf(searchText.toLowerCase()) > -1 ||
        description.indexOf(searchText.toLowerCase()) > -1
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
