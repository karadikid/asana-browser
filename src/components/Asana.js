import React, { Component } from "react";
import './Asana.css';

class Asana extends Component {

  render() {
    console.log(this.props)
    return (
    <div class="Card">
    <li>{this.props.sanskrit_name}</li>
    <li>{this.props.english_name}</li>
    <img src={this.props.url}/>
    </div>
    );
  }
}

export default Asana;
