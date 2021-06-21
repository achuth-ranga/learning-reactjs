import React, { Component } from 'react';

export class GeneralList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className={`bg-${this.props.theme} text-white p-2`} >
            {this.props.list.map((item, index) => <div key={item}>{index + 1 + " : " + item}</div>)}
        </div>);
    }
}
