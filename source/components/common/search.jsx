import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onHandleChange(e) {
    const queryString = e.target.value;
    this.props.onHandleChange(queryString);
    this.setState({ value: queryString });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
        >
          <FormControl
            type="text"
            value={this.state.value}
            placeholder=""
            onChange={this.onHandleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}

Search.propTypes = {
  onHandleChange: React.PropTypes.func.isRequired,
};

export default Search;
