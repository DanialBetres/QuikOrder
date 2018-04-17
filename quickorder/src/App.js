import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import InputBox from './pages/inputarea';
import TextBox from '../src/components/textfield';
import SelectFieldExampleSimple from '../src/components/chooseAgency'
import Agency from '../src/components/chooseAgency2'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton'
import database from './database'
import Paper from 'material-ui/Paper';

const object = [{ floatingLabelText: 'Rice', limit: '5'},{ floatingLabelText: 'Rice XL', limit: '2'},{ floatingLabelText: 'Pasta', limit: '7'} ]
const object2 = [{ floatingLabelText: 'Cookies', limit: '5'},{ floatingLabelText: 'Crackers', limit: '2'},{ floatingLabelText: 'Healthy Snacks', limit: '7'} ]
const style = {
  grains: {
  height: 290,
  width: '32%',
  margin: 20,
  
  textAlign: 'center',
  display: 'inline-block',
  },
  snacks: {
    height: 290,
    width: '32%',
    margin: 10,
    
    textAlign: 'center',
    display: 'inline-block',
  },
  agency: {
    textAlign: 'right'
  }
};
class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.grainlimitNumber = this.grainlimitNumber.bind(this);
  // }
  _sendData = (state) => {

    this.setState({ date: new Date() })
 
    // console.log("agency name is " + agencyName);  
    // for(var i=0;i<6;i++){
      // database.ref(agencyName + "/Allocation").once('value').then(res => {
      //     console.log(res.val());
      // })
    // }
    let itemdeficitgrain = [];
    let itemsurplusgrain = [];
    let itemsurplussnack = [];
    let itemdeficitsnack = [];

    let response= '';
    database.ref('/').once('value').then(res => {
      let agency = state.agency;
  
      response = res.val();
      const grainAllocation = (parseFloat(response[agency].Allocation.grains)*parseInt(response["Inventory"].grains));
      const snackAllocation = (parseFloat(response[agency].Allocation.snacks)*parseInt(response["Inventory"].snacks));
      // console.log(response); parseInt(state.rice) + parseInt(state.ricexl) + parseInt(state.pasta) -
      
      let Pastadifference = grainAllocation*(parseFloat(response["Inventory"]["GrainAllocation"].Pasta)) - parseInt(state.pasta);
      if(Pastadifference >0){
        itemsurplusgrain.push({item:"pasta"})
      }else if (Pastadifference <0){
        itemdeficitgrain.push({item:"pasta"})
      }

      let Ricedifference = grainAllocation*(parseFloat(response["Inventory"]["GrainAllocation"].Rice)) - parseInt(state.rice);
      if(Ricedifference >0){
        itemsurplusgrain.push({item:"rice"})
      }else if (Ricedifference <0){
        itemdeficitgrain.push({item:"rice"})
      }

      let Ricexldifference = grainAllocation*(parseFloat(response["Inventory"]["GrainAllocation"].RiceXL)) - parseInt(state.ricexl);
      if(Ricexldifference >0){
        itemsurplusgrain.push({item:"rice xl"})
      }else if (Ricexldifference <0){
        itemdeficitgrain.push({item:"rice xl"})
      }
      let Cookiesdifference = snackAllocation*(parseFloat(response["Inventory"]["SnackAllocation"].Cookies)) - parseInt(state.cookies);
      if(Cookiesdifference >0){
        itemsurplussnack.push({item:"cookies"})
      }else if (Cookiesdifference <0){
        itemdeficitsnack.push({item:"cookies"})
      }
      let Crackersdifference = snackAllocation*(parseFloat(response["Inventory"]["SnackAllocation"].Crackers)) - parseInt(state.crackers);
      if(Crackersdifference >0){
        itemsurplussnack.push({item:"crackers"})
      }else if (Crackersdifference <0){
        itemdeficitsnack.push({item:"crackers"})
      }
      let Healthysnacksdifference = snackAllocation*(parseFloat(response["Inventory"]["SnackAllocation"].HealthySnacks)) - parseInt(state.healthysnacks);
      if(Healthysnacksdifference >0){
        itemsurplussnack.push({item:"healthy snacks"})
      }else if (Healthysnacksdifference <0){
        itemdeficitsnack.push({item:"healthy snacks"})
      }
      let graindeficitstring = '';
      let grainsurplusstring = '';

      let snackdeficitstring = '';
      let snacksurplusstring = '';

      if(itemdeficitsnack.length==0 && itemdeficitgrain.length ==0){
        database.ref(this.state.agency + "/" + this.state.date).set({
              rice: state.rice,
              riceXL: state.ricexl,
              pasta: state.pasta,
              cookies: state.cookies,
              crackers: state.crackers,
              healthySnacks: state.healthysnacks
            })

            alert("Your order has been submitted!");
      }
     
         else if(itemdeficitgrain!=0 && itemdeficitsnack!=0){
          itemdeficitgrain.forEach( x => {
            graindeficitstring += x.item + ", ";
          })
          itemsurplusgrain.forEach(x => {
            grainsurplusstring += x.item + ", ";
          })

          itemdeficitsnack.forEach( x => {
            snackdeficitstring += x.item + ", ";
          })
          itemsurplussnack.forEach(x => {
            snacksurplusstring += x.item + ", ";
          })

          alert(graindeficitstring + "is over the allocation limit. It can be subsituted for additional " + grainsurplusstring + "\n \n"  + snackdeficitstring + "is also above the allocation limit and can be replaced with " + snacksurplusstring);
        } else if(itemdeficitgrain!=0) {

            itemdeficitgrain.forEach( x => {
              graindeficitstring += x.item + ", ";
            })
            itemsurplusgrain.forEach(x => {
              grainsurplusstring += x.item + ", ";
            })

            alert(graindeficitstring + "is over the allocation limit. It can be subsituted for additional " + grainsurplusstring);
          } else {
            itemdeficitsnack.forEach( x => {
              snackdeficitstring += x.item + ", ";
            })
            itemsurplussnack.forEach(x => {
              snacksurplusstring += x.item + ", ";
            })

            alert(snackdeficitstring + "is over the allocation limit. It can be subsituted for additional " + snacksurplusstring);
          }

    // if(itemdeficitsnack!=0){
    //   itemdeficitsnack.forEach( x => {
    //         snackdeficitstring += x.item + ", ";
    //       })
    //       itemsurplusgrain.forEach(x => {
    //         snacksurplusstring += x.item + ", ";
    //       })
    //   // alert("the items that are short are " + deficitstring + ". They can be replaced by " + surplusstring);
    // }


      // let graindifference = parseInt(state.rice) + parseInt(state.ricexl) + parseInt(state.pasta) - (parseFloat(response[agency].Allocation.grains)*parseInt(response["Inventory"].grains));
      // let snackdifference = parseInt(state.cookies) + parseInt(state.crackers) + parseInt(state.healthysnacks) - (parseFloat(response[agency].Allocation.snacks)*parseInt(response["Inventory"].snacks));
      // itemdeficit.forEach(function (x) {
      //   var xx = x.item
      //   alert(xx);
      // })
    })
}
allocationPercentage = (state) => {
database.ref("Inventory/").set({
  snacks:'100',
  grains:'120'
});
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
    open: false,
    // snackssurplus: '',
    // snacksdeficit: '',
    // grainsurplus: '',
    // graindeficit: '',
    limitrice:0,
    limitricexl:0,
    limitpasta:0,
    limitcookies:0,
    limitcrackers:0,
    limithealthysnacks:0


  }
  
  handleOpen = () => {
    this.setState({open: true});
  };

  grainlimitNumber = () => {
    let limit = 0;
    if (this.state.agency == '') {
      return 0;
    }
    database.ref('/').once('value').then(res => {   
      
      let response = res.val();

      let limit1 =  (parseFloat(response[this.state.agency].Allocation.grains)*parseInt(response["Inventory"].grains))*(parseFloat(response["Inventory"]["GrainAllocation"].Rice))
      this.setState({limitrice:parseInt(limit1)});
      let limit2 =  (parseFloat(response[this.state.agency].Allocation.grains)*parseInt(response["Inventory"].grains))*(parseFloat(response["Inventory"]["GrainAllocation"].RiceXL))
      this.setState({limitricexl:parseInt(limit2)});
      let limit3 =  (parseFloat(response[this.state.agency].Allocation.grains)*parseInt(response["Inventory"].grains))*(parseFloat(response["Inventory"]["GrainAllocation"].Pasta))
      this.setState({limitpasta:parseInt(limit3)});
      let limit4 =  (parseFloat(response[this.state.agency].Allocation.snacks)*parseInt(response["Inventory"].snacks))*(parseFloat(response["Inventory"]["SnackAllocation"].Cookies))
      this.setState({limitcookies:parseInt(limit4)});
      let limit5 =  (parseFloat(response[this.state.agency].Allocation.snacks)*parseInt(response["Inventory"].snacks))*(parseFloat(response["Inventory"]["SnackAllocation"].Crackers))
      this.setState({limitcrackers:parseInt(limit5)});
      let limit6 =  (parseFloat(response[this.state.agency].Allocation.snacks)*parseInt(response["Inventory"].snacks))*(parseFloat(response["Inventory"]["SnackAllocation"].HealthySnacks))
      this.setState({limithealthysnacks:parseInt(limit6)});

    })
    console.log(limit)
    // return limit;
   }

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [

      <FlatButton
        label="ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];
    // console.log(this.state)
    return (
      <div className="App">
      <h1>OrderBinder </h1>
        <MuiThemeProvider>
          <div className="agency">
          {/* <Agency style={style.agency}/> */}
            <SelectFieldExampleSimple 
              floatingLabelText="Choose Agency" 
              onChange={(event, index, value) => { 
                this.setState({ agency: value})
                this.grainlimitNumber()
              }
          }/>
            </div>

            <div className="paper ">
            <Paper style={style.grains} zDepth={3} >
            <div  className="paper1"> 
              <h2 className="foodtitle"> Grains </h2>
              <TextBox className="Apps" floatingLabelText="Rice" limit={`The max limit is ${this.state.limitrice}`} onChange={e => this.setState({ rice: e.target.value})}/>
              <TextBox floatingLabelText="Rice XL" limit={`The max limit is ${this.state.limitricexl}`} onChange={e => this.setState({ ricexl: e.target.value})}/>
              <TextBox floatingLabelText="Pasta" limit={`The max limit is ${this.state.limitpasta}`} onChange={e => this.setState({ pasta: e.target.value})}/>
              </div>
            </Paper>
            <Paper style={style.snacks} zDepth={3} >
              <h2 className="foodtitle"> Snacks </h2>
              <TextBox floatingLabelText="Cookies" limit={`The max limit is ${this.state.limitcookies}`} onChange={e => this.setState({ cookies: e.target.value})}/>
              <TextBox floatingLabelText="Crackers" limit={`The max limit is ${this.state.limitcrackers}`} onChange={e => this.setState({ crackers: e.target.value})}/>
              <TextBox floatingLabelText="Healthy Snacks" limit={`The max limit is ${this.state.limithealthysnacks}`} onChange={e => this.setState({ healthysnacks: e.target.value})}/>
            </Paper>
            </div>
            <RaisedButton className="button" label="Submit" primary={false} onClick={() => this._sendData(this.state)}/>

   
          </MuiThemeProvider>

      </div>
    )
}
}
export default App;
