import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import React, {Component} from 'react';
const styles = {
    customWidth: {
      width: 150,
    },
  };

  export default class SelectFieldExampleSimple extends Component {

    render() {
      return (
        <div>
          <SelectField
            floatingLabelText="Frequency"
            onChange={this.props.onChange}
          >
            <MenuItem value={1} primaryText="St. Josephs" />
            <MenuItem value={2} primaryText="Salvation Army" />
            <MenuItem value={3} primaryText="House of Friendship" />

          </SelectField>
        </div>
      )
    }
}
