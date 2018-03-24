import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import React, {Component} from 'react';
import {grey900, blue500} from 'material-ui/styles/colors';

const styles = {
    customWidth: {
      width: 150,
    },
    underlineStyle: {
      borderColor: grey900,
      
    },
  };




  export default class SelectFieldExampleSimple extends Component {
    state = {
      value: 0,
    }
    render() {
      
      return (
        <div>
          <SelectField underlineStyle={styles.underlineStyle}
            // floatingLabelText="Agency"
            onChange={this._onChange}
            value={this.state.value} 
            hintText={"Please select your following Agency"}
            floatingLabelStyle={{color: 'black'}}

            >
            <MenuItem value={1} primaryText="St. Josephs" />
            <MenuItem value={2} primaryText="Salvation Army" />
            <MenuItem value={3} primaryText="House of Friendship" />

          </SelectField>
        </div>
      )
    }

    _onChange = (event, index, value) => {
      this.setState({ value: value})
      this.props.onChange(event, index, value)
    }
}
