import React, { Component } from "react";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import { v4 as uuid } from 'uuid';

import "./App.css";
import Axios from "axios";

class App extends Component {
  // States & Fetch values in the JSON Placeholder
  state = {
    todos: [

    ],
  };

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }));
  }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  //Delete Todo 
  delTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        // ... is called spread operator
        //filter() is used to filter all the state and return into array
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }));
  }

  //Add Todo
  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid(),
    //   /*ES6 if the names are the same you could put the name only else 
    //   use title:title*/
    //   title,
    //   completed: false
    // }
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res => this.setState({
      todos: [...this.state.todos, res.data]
    }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                {/* Add states called todos inside to 
                Todos component */}
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />

          </div>
        </div >
      </Router>
    );
  }
}

export default App;
