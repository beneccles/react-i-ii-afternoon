import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.js';
import Display from './display';
import Editor from './Editor';

class App extends Component {
  constructor(){
    super()

    this.state = {
      data: data,
      current: 0
    }
  }
  updateCount(value){

    // Update the current index only if the count is greater than or equal
    // to the 0 index, and less then equal to the highest index number.
    if (value >= 0 && value < this.state.data.length)
    {
     this.setState({current:value});
    }
  }

  render(){
  // Since we imported it, we can access it just by referencing data.

  return (
    <div className="App">
    <div className="header">
      <h1 id="homeLink" onClick={()=>window.location.reload()}>Home</h1>
    </div>
    <div className="main">
      <div className="userBox">
        {/* Main Content of User */}
        <div className="objCount">
          <h1>{`${this.state.current + 1}/${this.state.data.length}`}</h1>
        </div>
        <div>
          {console.log("Index to Display:" + this.state.current)}
          <Display key={this.state.current} dObject={this.state.data[this.state.current]}/>
        </div>
      </div>
      <div className="controlPanel">
        {/* Render Control Buttons */}
        <h1 className="navi" onClick={() => this.updateCount(this.state.current - 1)}> {`< Previous`} </h1>
        <Editor />
        <h1 className="navi" onClick={() => this.updateCount(++this.state.current)}> {`Next >`} </h1>
      </div>
    </div>
    </div>
  )
  }
}

export default App;
