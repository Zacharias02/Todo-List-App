import React, { Component } from "react";
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      //Styling using ternary operator ?(if) :(else)
      textDecoration: this.props.todo.completed ?
        'line-through' : 'none'
    }
  }

  render() {
    //Deconstructuring
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        {/* Access property todo then show the title */}
        <p>
          {/* Eventing */}
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
          {title}
          {/* Delete Event */}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    );
  }
}

//PropTypes is like a validation
//Define PropType from this class (object)
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

const btnStyle = {
  background: '#ff0000',
  color: '#ffffff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;
