import React from 'react';
import PropTypes from 'prop-types';
import Rheostat from 'rheostat';

import './slider.scss';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minValue: this.props.minValue,
      maxValue: this.props.maxValue,
      values: [this.props.minValue, this.props.maxValue],
    };

    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onHandleChange(e) {
    const values = e.values;

    this.props.onHandleChange(values);
    this.setState({ values });
  }

  getMinSlider() {
    return this.state.values[0];
  }

  getMaxSlider() {
    return this.state.values[1];
  }

  render() {
    return (
      <div className="price-slider">
        <Rheostat
          min={this.props.minValue}
          max={this.props.maxValue}
          values={this.state.values}
          onChange={this.onHandleChange}
        />
        <div className="price-label-min">
          Min. &euro; {this.getMinSlider()},-
        </div>
        <div className="price-label-max">
          Max. &euro;{this.getMaxSlider()},-
        </div>
      </div>
    );
  }
}

Slider.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired
};

export default Slider;
