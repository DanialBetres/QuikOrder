import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import InputBox from './pages/inputarea';
import TextBox from '../src/components/textfield';
import SelectFieldExampleSimple from '../src/components/chooseAgency'
class App extends Component {
  render() {
    return (
      <div className="App">
          <MuiThemeProvider>
          <SelectFieldExampleSimple/>

            <InputBox /> 
            {/* <TextBox title="ddd" /> */}
          </MuiThemeProvider>
      </div>
    )
  }
}

export default App;
