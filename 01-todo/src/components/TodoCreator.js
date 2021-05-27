import React, { Component } from 'react'

export class TodoCreator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nextItemText: ""
        }
    }

    render = () =>
        <div className="container-fluid m-1">
            <input value={this.state.nextItemText}
                onChange={this.updateNewItemText}
                className="form-control"></input>
            <button className="btn btn-primary m-2"
                onClick={this.addNewToDoItem}
            >Add</button>
        </div>


    updateNewItemText = (e) => {
        this.setState({
            nextItemText: e.target.value
        })
    }

    addNewToDoItem = () => {
        this.props.callback(this.state.nextItemText);
        this.setState({
            nextItemText: ""
        })
    }

}