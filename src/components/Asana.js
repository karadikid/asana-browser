import React, { Component } from "react";
import './Asana.css';
import Card from "react-bootstrap/Card";

class Asana extends Component {

  render() {
    console.log(this.props)
    return (
      <>
    <Card>
      <Card.Img src={this.props.url}/>
        <Card.Body>
          <Card.Title>{this.props.sanskrit_name}</Card.Title>
          <Card.Text>{this.props.english_name}</Card.Text>
        </Card.Body>
    </Card>
    </>
    );
  }
}
export default Asana;