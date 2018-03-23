import React, { Component } from 'react';
import TextBox from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import styles from './inputarea.css';

class InputBox extends Component {
    state = {
      textFieldValue: 'ggg'
    }

    render() {
      console.log(this.state.textfieldValue)
        return(
            <div>
               {this.props.data.map((o,i) =>
                 <TextField key={i} className={styles.textField} floatingLabelText={o.floatingLabelText} hintText={`Max ${o.limit}`}  onChange={this._handleTextFieldChange}  />
               )}
            </div>
        )
    }

     _handleTextFieldChange = e => console.log(e.target.value)
};

export default InputBox;
