import { connect } from 'react-redux';
import { filterBySearch } from '../actions/filter.js';
import Search from '../components/common/search.jsx';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => (
  {
    onHandleChange: (searchString) => {
      dispatch(filterBySearch(searchString));
    }
  }
);

const searchFilter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

export default searchFilter;
