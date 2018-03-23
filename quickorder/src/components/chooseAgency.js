import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import React, {Component} from 'react';
const styles = {
    customWidth: {
      width: 150,
    },
  };

  export default class SelectFieldExampleSimple extends Component {
    state = {
      value: 1,
    };
  
    handleChange = (event, index, value) => this.setState({value});
  
    render() {
      return (
        <div>
          <SelectField
            floatingLabelText="Frequency"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText="St. Josephs" />
            <MenuItem value={2} primaryText="Salvation Army" />
            <MenuItem value={3} primaryText="House of Friendship" />
         
          </SelectField>
        </div>
      )
    }
}
