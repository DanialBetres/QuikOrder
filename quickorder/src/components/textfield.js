import React from 'react';
import TextField from 'material-ui/TextField';

const TextBox = (props) => {
    return(
        <div>
            <TextField hintText={props.title}/>
        </div>
    )
}

export default TextBox;