import { connect } from 'react-redux';
import { changeCategoryFilter } from '../actions/filter';
import CategoryList from '../components/common/categoryList.jsx';

const mapStateToProps = state => ({ categories: state.filters.categories });

const mapDispatchToProps = dispatch => (
  {
    onHandleChange: (category) => {
      dispatch(changeCategoryFilter(category));
    }
  }
);

const categoryFilter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryList);

export default categoryFilter;
