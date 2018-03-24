import React from 'react';
import TextField from 'material-ui/TextField';
import {grey900, blue500} from 'material-ui/styles/colors';

const styles = {
  
    underlineStyle: {
      borderColor: grey900,
      
    },

    floatingLabelFocusStyle: {
      color: blue500,
    },
  };

const TextBox = (props) => {
   
    return(
        <div>
            <TextField underlineStyle={styles.underlineStyle} hintText={props.limit} floatingLabelText={props.floatingLabelText} onChange={props.onChange}/>
        </div>
    )
}

export default TextBox;
