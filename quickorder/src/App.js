import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import InputBox from './pages/inputarea';
import TextBox from '../src/components/textfield';
import SelectFieldExampleSimple from '../src/components/chooseAgency'
import RaisedButton from 'material-ui/RaisedButton'
import database from './database'
const object = [{ floatingLabelText: 'Rice', limit: '5'},{ floatingLabelText: 'Rice XL', limit: '2'},{ floatingLabelText: 'Pasta', limit: '7'} ]
const object2 = [{ floatingLabelText: 'Cookies', limit: '5'},{ floatingLabelText: 'Crackers', limit: '2'},{ floatingLabelText: 'Healthy Snacks', limit: '7'} ]

class App extends Component {

  state = {
    agency: '',
    rice: 0,
    ricexl: 0,
    pasta: 0,
    cookies: 0,
    crackers: 0,
    healthysnacks: 0
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
          <MuiThemeProvider>
          <SelectFieldExampleSimple onChange={(event, index, value) => this.setState({ agency: value})}/>
            <TextBox floatingLabelText="Rice" limit={3} onChange={e => this.setState({ rice: e.target.value})}/>
            <TextBox floatingLabelText="Rice XL" limit={3} onChange={e => this.setState({ ricexl: e.target.value})}/>
            <TextBox floatingLabelText="Pasta" limit={3} onChange={e => this.setState({ pasta: e.target.value})}/>
            <TextBox floatingLabelText="Cookies" limit={3} onChange={e => this.setState({ cookies: e.target.value})}/>
            <TextBox floatingLabelText="Crackers" limit={3} onChange={e => this.setState({ crackers: e.target.value})}/>
            <TextBox floatingLabelText="Healthy Snacks" limit={3} onChange={e => this.setState({ healthysnacks: e.target.value})}/>
            <RaisedButton label="Submit" primary={true} onClick={this._sendData}/>
          </MuiThemeProvider>
      </div>
    )
}
  _sendData = () => database.ref('/1').set('hello');
}

export default App;
