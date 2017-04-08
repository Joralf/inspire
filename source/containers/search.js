import { connect } from 'react-redux';
import { filterBySearchString } from '../actions/filter';
import Search from '../components/common/search.jsx';

const mapStateToProps = (state, ownProps) => {
  return {}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onHandleChange: (queryString) => {
      dispatch(filterBySearchString(queryString));
    }
  };
};

const searchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

export default searchContainer;
