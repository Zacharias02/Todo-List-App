import React, { Component } from "react";
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {


  render() {
    //Return property todos then map it and passed to TodoItem component.
    //Map is like a foreach.
    return this.props.todos.map((todo) =>
      //Must have a key 
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo} />
    );
  }
}

//PropTypes is like a validation
//Define PropType from this class (array)
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default Todos;
