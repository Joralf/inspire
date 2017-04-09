import React from 'react';
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

  render() {
    return (
      <div>
        <Rheostat
          min={this.props.minValue}
          max={this.props.maxValue}
          values={this.state.values}
          onChange={this.onHandleChange}
        />
        between {this.state.values[0]} and {this.state.values[1]} euros
      </div>
    );
  }
}

Slider.propTypes = {
  onHandleChange: React.PropTypes.func.isRequired,
  minValue: React.PropTypes.number,
  maxValue: React.PropTypes.number
};

Slider.defaultProps = {
  minValue: 0,
  maxValue: 100
};

export default Slider;
