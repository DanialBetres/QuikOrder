import React from 'react';
import TextField from 'material-ui/TextField';

const TextBox = (props) => {

    return(
        <div>
            <TextField hintText={props.limit} floatingLabelText={props.floatingLabelText} onChange={props.onChange}/>
        </div>
    )
}

export default TextBox;
