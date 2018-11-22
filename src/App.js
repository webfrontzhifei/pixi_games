import React, { Component } from 'react';
import './App.css';
import Demo1 from './components/Demo1';
import TodoListModel from './models/TodoListModel';
class App extends Component {
  constructor(opts) {
    super(opts);
    this.store = new TodoListModel();
  }
  render() {
    return (
      <div className="App">
        <Demo1></Demo1>
      </div>
    );
  }
}

export default App;
