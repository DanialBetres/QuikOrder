import React, { Component } from 'react';
import TextBox from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
class InputBox extends Component {

    render() {
        return(
            <div>
                <TextField floatingLabelText="Rice" hintText="Max 5" />
                <TextField floatingLabelText="Rice XL" HintText="Max 2" />
                <TextField floatingLabelText="Pasta" HintText="Max 7" />
             
            </div>
        )
    }
};

export default InputBox;
