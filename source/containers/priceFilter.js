import { connect } from 'react-redux';
import { filterByPrice } from '../actions/filter';
import Slider from '../components/common/slider.jsx';

const min = (array, key) => {
  return array.reduce((prev, curr) => {
    return prev[key] < curr[key] ? prev : curr;
  })[key];
};

const max = (array, key) => {
  return array.reduce((prev, curr) => {
    return prev[key] > curr[key] ? prev : curr;
  })[key];
};

const mapStateToProps = (state, ownProps) => {
  return {
    minValue: 50,
    maxValue: 200,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onHandleChange: (values) => {
      dispatch(filterByPrice(values[0], values[1]));
    }
  };
};

const priceFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Slider);

export default priceFilterContainer;
