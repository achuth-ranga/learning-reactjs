/* eslint-disable */
import React, { Component } from 'react'
import reactlogo from './logo.svg';
import './App.css';
import { Display } from "./Display";


let name = "Achuth";
const city = "Hyderabad";

// eslint-disable-next-line no-unused-vars
let error = "not a valid statement";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city: "London"
    }
  }

  changeCity = () => {
    this.setState({ city: this.state.city === "London" ? "New York" : "London" })
  }



  message = () => `Hello ${name}, welcome to ${city}`;
  render = () =>
    <div className="text-center">
      <h4 className="bg-primary text-white text-center p-4">
        {this.message()}
      </h4>
      <img src={reactlogo} alt="reactlogo"></img>
      <link type="stylesheet" href={process.env.PUBLIC_URL + "/static.css"}></link>
      <img src={process.env.PUBLIC_URL + "/logo.svg"} alt="reactLogo" />
      <Display value={this.state.city} callback={this.changeCity} />
    </div>



}


