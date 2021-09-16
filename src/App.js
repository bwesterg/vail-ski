import React, { Component } from 'react';
import TrailContainer from './components/TrailContainer';
import './App.css';

class App extends Component {

  state = {
    trails: []
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
