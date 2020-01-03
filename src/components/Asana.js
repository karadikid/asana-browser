import React, { Component } from "react";


class Asana extends Component {

  render() {
    console.log(this.props)
    return (
    <div>
    <li>{this.props.sanskrit_name}</li>
    <img src={this.props.url}/>
    </div>
    );
  }
}

export default Asana;
