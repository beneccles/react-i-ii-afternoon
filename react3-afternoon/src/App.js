import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.js';
import Display from './display';

class App extends Component {
  constructor(){
    super()

    this.state = {
      data: data,
      current: 0
    }
  }

  render(){
  // Since we imported it, we can access it just by referencing data.
  console.log(data); 

  return (
    <div className="App">
    <div className="header">
      
    </div>
    <div className="main">
      <div className="userBox">
        {/* Main Content of User */}
        <div className="objCount">
          <h1>{`${this.state.current + 1}/${this.state.data.length}`}</h1>
        </div>
        <div>
          <Display dObject={this.state.data[0]}/>
        </div>
      </div>
      <div className="controlPanel">
        {/* Render Control Buttons */}
        <h1 className="navi"> {`< Previous`} </h1>
        <h1 className="navi"> {`Next >`} </h1>
      </div>
    </div>
    </div>
  )
  }
}

export default App;
