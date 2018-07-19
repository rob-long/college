import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ProgramAreaInput extends React.Component {
  state = {
    selectedOption: '',
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  };

  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <Select
        className="center  w-60"
        name="form-field-name"
        value={value}
        onChange={this.handleChange}
        options={[{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }]}
      />
    );
  }
}

export default ProgramAreaInput;
