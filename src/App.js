import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import './AddForm';

import Ninjas from './Ninjas';
import AddForm from './AddForm';

class App extends Component {

  constructor(props){
    super(props);
    this.idValue = App.idGenerator(); 
  }

  
  state =  {
    'name' : 'Amar',
    ninjas: []
  }

  static *idGenerator(start=0, step=1){
    while(true){
      yield start++;
    }

  }

  addNinja = (ninja) => {
    ninja.id = this.idValue.next().value;
    var ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas : ninjas
    });

  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas : ninjas 
    })
  }
  render() {
    return (
      <div className="app-content">
        <h1>Hello Ninjas!!!!</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
        <AddForm addNinja={this.addNinja}/>
      </div>
    )
  }
}

export default App;
