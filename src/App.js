import React, { Component } from 'react';
import TrailContainer from './components/TrailContainer';
import './App.css';

class App extends Component {

  state = {
    trails: [
      {name: "The Pump Hole", difficulty:"2Black"},
      {name: "Riva Ridge", difficulty:"1Black"},
      {name: "Avanti", difficulty:"Blue"},
      {name: "Highline", difficulty:"2Black"}
    ]
  }

  render(){
    return (
      <div className="App">
        <TrailContainer trails={this.state.trails} />
      </div>
    );
  }
}

export default App;
