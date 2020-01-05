import React, { Component } from "react";
import './Asana.css';
import Card from 'react-bootstrap/Card';
//https://react-bootstrap.github.io/components/cards/ for default methods


class Asana extends Component {

  render() {
    console.log(this.props)
    return (
      <>
    <Card class='Card'>
      <Card.Img class='cardImage' src={this.props.url}/>
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