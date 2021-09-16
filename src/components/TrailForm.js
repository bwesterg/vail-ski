import React, { Component } from 'react';


export default class TrailForm extends Component {
    
    state = {
        name: "",
        difficulty: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form className="trail-form">
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