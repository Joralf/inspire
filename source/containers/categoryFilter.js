import { connect } from 'react-redux';
import { addCategoryFilter, removeCategoryFilter } from '../actions/filter.js';
import CategoryList from '../components/common/categoryList.jsx';

const mapStateToProps = state => ({
  categories: [...new Set(state.courses.results.map(item => item.category))],
  activeCategories: state.filters.categories
});


const mapDispatchToProps = dispatch => (
  {
    onHandleChange: (category, active) => {
      if (active) {
        return dispatch(removeCategoryFilter(category));
      }
      return dispatch(addCategoryFilter(category));
    }
  }
);

const categoryFilter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryList);

export default categoryFilter;
