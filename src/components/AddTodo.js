//Class-based Components
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    /*[e.target.name] - It is used to not call every single html elements 
    as long as the name is equal to the state.*/
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex', padding: '5px' }}>
                <input
                    type="text"
                    name="title"
                    style={{ flex: '10' }}
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: '1' }}
                />
            </form>
        )
    }
}

//PropTypes is like a validation
//Define PropType from this class (object)
AddTodo.propTypes = {
    addTodo: PropTypes.object.isRequired
}

export default AddTodo
