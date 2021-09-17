import React, { Component } from 'react';

const initialState = {
    name: "",
    difficulty: ""
}

export default class TrailForm extends Component {
    
    state = initialState

    handleChange = (event) => {
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
                <label>Difficulty</label>
                <input 
                    type="text" 
                    name="difficulty"
                    value={this.state.difficulty} 
                    onChange={this.handleChange}
                />
                <input type="submit" value="Add a Trail" />

            </form>
        )
    }
}