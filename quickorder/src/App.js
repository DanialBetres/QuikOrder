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

  _sendData = (state) => {

    this.setState({ date: new Date() })
    console.log(state.date)
    const agencyName = state.agency;
    // console.log("agency name is " + agencyName);  
    // for(var i=0;i<6;i++){
      // database.ref(agencyName + "/Allocation").once('value').then(res => {
      //     console.log(res.val());
      // })
    // }
    let allocation= '';
    database.ref(agencyName+ "/Allocation").once('value').then(res => {
      // console.log(res.val());
      allocation = res.val();

      let ricediff = state.rice - allocation.riceLimit;
      console.log(ricediff)
      let ricexldiff = state.ricexl - allocation.riceXlLimit;
      let pastadiff = state.pasta - allocation.pastaLimit;
      let cookiesdiff = state.cookies - allocation.cookiesLimit;
      let crackersdiff = state.crackers - allocation.crackersLimit;
      let healthysnacksdiff = state.healthysnacks - allocation.healthySnacksLimit

      if(ricediff >0 || ricexldiff >0 || pastadiff >0 || cookiesdiff >0 || crackersdiff >0 || healthysnacksdiff > 0){

      
        if(ricediff>0){
          alert("You ordered more rice then allocated, the maximum you can order is " + allocation.riceLimit + " and you ordered " + state.rice + ". Other potential substitutes for rice are pasta or riceXL");
        }
        if(ricexldiff>0){
          alert("You ordered more ricexl then allocated, the maximum you can order is " + allocation.riceXlLimit + " and you ordered " + state.ricexl + ". Other potential substitutes for ricexl are pasta or rice");

        }
        if(pastadiff>0){
          alert("You ordered more pasta then allocated, the maximum you can order is " + allocation.pastaLimit + " and you ordered " + state.pasta + ". Other potential substitutes for pasta are rice or riceXL");

        }
        if(cookiesdiff>0){
          alert("You ordered more cookies then allocated, the maximum you can order is " + allocation.cookiesLimit + " and you ordered " + state.cookies + ". Other potential substitutes for cookies are healthy snacks or crackers");

        }
        if(crackersdiff>0){
          alert("You ordered more crackers then allocated, the maximum you can order is " + allocation.crackersLimit + " and you ordered " + state.crackers + ". Other potential substitutes for crackers are cookies or healthy snacks");

        }
        if(healthysnacksdiff>0){
          alert("You ordered more healthy snacks then allocated, the maximum you can order is " + allocation.healthySnacksLimit + " and you ordered " + state.healthysnacks + ". Other potential substitutes for healthy snacks are cookies or crackers");

        }
      } else {

        database.ref(agencyName + "/" + state.date).set({
          rice: state.rice,
          riceXL: state.ricexl,
          pasta: state.pasta,
          cookies: state.cookies,
          crackers: state.crackers,
          healthySnacks: state.healthysnacks
        })
        alert("submitted sucka!!");
      }

      // if(state.rice>allocation.riceLimit){

      //   let ShortageRice = state.rice - allocation.riceLimit;
      // }
      // if(state.ricexl >allocation.riceXlLimit){

      // }
      // if(state.pasta > allocation.pasta) {

      // }
      // if(state.cookies > allocation.cookiesLimit){

      // }

    })


    // database.ref(agencyName + state.date).set({
      
    // })
    // database.ref(agencyName + "/Allocation").set({
    //   riceLimit:state.rice,
    //   riceXlLimit:state.ricexl,
    //   pastaLimit:state.pasta,
    //   cookiesLimit:state.cookies,
    //   crackersLimit:state.crackers,
    //   healthySnacksLimit:state.healthysnacks,
    // });

}

  state = {
    agency: '',
    rice: 0,
    ricexl: 0,
    pasta: 0,
    cookies: 0,
    crackers: 0,
    healthysnacks: 0,
    date: '',
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
      <h1>QuikOrder </h1>
          <MuiThemeProvider>
          <SelectFieldExampleSimple onChange={(event, index, value) => this.setState({ agency: value})}/>
            <TextBox className="Apps" floatingLabelText="Rice" limit={3} onChange={e => this.setState({ rice: e.target.value})}/>
            <TextBox floatingLabelText="Rice XL" limit={3} onChange={e => this.setState({ ricexl: e.target.value})}/>
            <TextBox floatingLabelText="Pasta" limit={3} onChange={e => this.setState({ pasta: e.target.value})}/>
            <TextBox floatingLabelText="Cookies" limit={3} onChange={e => this.setState({ cookies: e.target.value})}/>
            <TextBox floatingLabelText="Crackers" limit={3} onChange={e => this.setState({ crackers: e.target.value})}/>
            <TextBox floatingLabelText="Healthy Snacks" limit={3} onChange={e => this.setState({ healthysnacks: e.target.value})}/>
            <RaisedButton label="Submit" primary={false} onClick={() => this._sendData(this.state)}/>
          </MuiThemeProvider>
      </div>
    )
}
}
export default App;
