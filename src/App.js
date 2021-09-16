import React, { Component } from 'react';
import TrailContainer from './components/TrailContainer';
import TrailForm from './components/TrailForm';
import './App.css';

class App extends Component {

  state = {
    trails: [],
  }

  componentDidMount(){
    fetch("http://localhost:3000/trails")
      .then(response => response.json())
      .then(trails => this.setState({trails}))
  }

  addTrail = (newTrail) => {
    this.setState({
      trails: [...this.state.trails, newTrail]
    })
  }

  render(){
    return (
      <div className="App">
        <TrailForm addTrail={this.addTrail} />
        <TrailContainer trails={this.state.trails} />
      </div>
    );
  }
}

export default App;
