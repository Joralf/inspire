import { connect } from 'react-redux';
import { filterByPrice } from '../actions/filter.js';
import Slider from '../components/common/slider.jsx';

import { min, max } from '../helpers/array.js';

const mapStateToProps = state => (
  {
    minValue: min(state.courses.results, 'price'),
    maxValue: max(state.courses.results, 'price'),
  }
);

const mapDispatchToProps = dispatch => (
  {
    onHandleChange: (values) => {
      dispatch(filterByPrice(values[0], values[1]));
    }
  }
);

const priceFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Slider);

export default priceFilterContainer;
