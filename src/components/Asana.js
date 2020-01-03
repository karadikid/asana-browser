import React, { Component } from "react";


class Asana extends Component {

  render() {
    console.log(this.props)
    return (
  <li>{this.props.sanskrit_name}</li>
    );
  }
}

export default Asana;
