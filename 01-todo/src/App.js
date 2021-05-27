import React, { Component } from 'react';

import { TodoBanner } from './components/TodoBanner'
import { TodoRow } from './components/TodoRow'
import { TodoCreator } from './components/TodoCreator'
import { VisibilityControl } from './components/VisibilityControl'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "Achuth",
      todoItems: [{ action: "Buy Flowers", done: false },
      { action: "Get Shoes", done: false },
      { action: "Collect Tickets", done: true },
      { action: "Call Joe", done: false }],
      showCompleted: false
    }
  }

  componentDidMount = () => {
    let data = localStorage.getItem("todos");
    this.setState(data != null
      ? JSON.parse(data)
      : {
        userName: "Adam",
        todoItems: [{ action: "Buy Flowers", done: false },
        { action: "Get Shoes", done: false },
        { action: "Collect Tickets", done: true },
        { action: "Call Joe", done: false }],
        showCompleted: true
      });
  }

  addNewToDoItem = (text) => {
    if (!this.state.todoItems.find((item) => item === text)) {
      this.setState({
        todoItems: [...this.state.todoItems,
        { action: text, done: false }],
        newItemText: "",
      }, () => localStorage.setItem("todos", JSON.stringify(this.state)))
    }
  }

  toggleTodo = (todo) => this.setState({
    todoItems:
      this.state.todoItems.map(item => item.action === todo.action
        ? { ...item, done: !item.done } : item)
  }, () => localStorage.setItem("todos", JSON.stringify(this.state)));

  createTableRows = (status) =>
    this.state.todoItems
      .filter(item => item.done === status)
      .map((item) =>
        <TodoRow item={item} callback={this.toggleTodo}></TodoRow>)

  render() {
    return (
      <div>
        <TodoBanner userName={this.state.name} tasks={this.state.todoItems}></TodoBanner>
        <TodoCreator callback={this.addNewToDoItem}></TodoCreator>
        <table className="table table-striped table-bordered">
          <thead>
            <tr> <th>Description</th> <th>Done</th></tr>
          </thead>
          <tbody>
            {this.createTableRows(false)}
          </tbody>
        </table>
        <div className="bg-secondary text-white text-center p-2">
          <VisibilityControl description="Completed Tasks"
            isChecked={this.state.showCompleted}
            callback={(checked) =>
              this.setState({ showCompleted: checked },
                () => localStorage.setItem("todos", JSON.stringify(this.state)))} />
        </div>
        {this.state.showCompleted &&
          <table className="table table-striped table-bordered">
            <thead>
              <tr><th>Description</th><th>Done</th></tr>
            </thead>
            <tbody>{this.createTableRows(true)}</tbody>
          </table>
        }
      </div>
    )
  };
}
