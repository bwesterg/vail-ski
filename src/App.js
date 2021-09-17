import { Component } from 'react';
import TrailContainer from './components/TrailContainer';
import TrailForm from './components/TrailForm';
import './App.css';

const trailsURL = "http://localhost:3000/trails/"

class App extends Component {

  state = {
    trails: [],
    currentId: 0
  }

  componentDidMount(){
    fetch(trailsURL)
      .then(response => response.json())
      .then(trails => this.setState({
        trails,
        currentId: trails[trails.length - 1].id
      }))
  }

  removeTrail = (trailToRemove) => {
    let filteredTrails = this.state.trails.filter(trail => {
      return trail !== trailToRemove
    })
    this.setState({
      trails: filteredTrails
    })
    fetch(trailsURL + trailToRemove.id, {
      method: "DELETE",
    })
  }

  addTrail = (newTrail) => {
    let newId = this.state.currentId + 1
     
    this.setState({
      trails: [...this.state.trails, newTrail],
      currentId: newId
    })

    fetch(trailsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id: newId, ...newTrail})
    })
  }

  render(){
    return (
      <div className="App">
        <TrailForm addTrail={this.addTrail} />
        <TrailContainer removeTrail={this.removeTrail} trails={this.state.trails} />
      </div>
    );
  }
}

export default App;
