import React, { Component } from 'react';
import TrailContainer from './components/TrailContainer';
import TrailForm from './components/TrailForm';
import './App.css';

class App extends Component {

  state = {
    trails: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/trails")
      .then(response => response.json())
      .then(trails => this.setState({trails}))
  }

  render(){
    return (
      <div className="App">
        <TrailForm />
        <TrailContainer trails={this.state.trails} />
      </div>
    );
  }
}

export default App;
