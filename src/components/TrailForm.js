import React, { Component } from 'react';

const initialState = {
    name: "",
    difficulty: ""
}

export default class TrailForm extends Component {
    
    state = initialState

    handleChange = (event) => {
        // console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTrail(this.state)
        this.setState(initialState)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="trail-form">
                <h2>New Trail Form</h2>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <label>Choose a difficulty:</label>
                <select name="difficulty" value={this.state.difficulty} onChange={this.handleChange} > 
                    <option value="green">GREEN</option>
                    <option value="blue">BLUE</option>
                    <option value="1black">1BLACK</option>
                    <option value="2black">2BLACK</option>
                </select>
                <input type="submit" value="Add a Trail" /> 
            </form>
        )
    }
}

