import React, { Component } from "react";
import './example'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 4
    }
  }

  isEven = (val) => {
    return val % 2 === 0 ? 'Even' : 'Odd';
  }

  getClassName = (val) => {
    return val % 2 === 0 ?
      'bg-primary text-white text-center p-2 m-1'
      : 'bg-secondary text-white text-center p-2 m-1';
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render = () =>
    <div>
      <h4 className={this.getClassName(this.state.count)}>
        <button className="btn btn-info m-2" onClick={this.increment}>ClickMe</button>
      The Count is {this.isEven(this.state.count)}
      </h4>

      <div className="container-fluid p-4">
        <h6 className={this.getClassName(this.state.count)}>
          BootStrap Grid Layout
      </h6>
        <div className="row bg-info text-white p-2">
          <div className="col font-weight-bold">Value</div>
          <div className="col-6 font-weight-bold">Even?</div>
        </div>
        <div className="row bg-light p-2 border">
          <div className="col">{this.state.count}</div>
          <div className="col-6">{this.isEven(this.state.count)}</div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-info m-2"
              onClick={this.increment}>
              Click Me
                </button>
          </div>
        </div>
      </div>

      <h6 className={this.getClassName(this.state.count)}>
        BootStrap table
      </h6>
      <table className="table table-striped table-bordered table-sm">
        <thead className="bg-info text-white">
          <tr><th>Value</th><th>Even?</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.count}</td>
            <td>{this.isEven(this.state.count)} </td>
          </tr>
        </tbody>
        <tfoot className="text-center">
          <tr>
            <td colSpan="2">
              <button className="btn btn-info m-2"
                onClick={this.increment}>
                Click Me
                        </button>
            </td>
          </tr>
        </tfoot>
      </table>
      <h6 className={this.getClassName(this.state.count)}>
        BootStrap Forms
      </h6>
      <div className="m-2">
        <div className="form-group">
          <label>Name:</label>
          <input className="form-control" />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input className="form-control" />
        </div>
      </div>
    </div>
}