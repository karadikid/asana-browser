import React, { Component } from "react";
import "./Asana.css";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
//https://react-bootstrap.github.io/components/cards/ for default methods

class Asana extends Component {
  render() {
    // console.log(this.props);
    return (
      <>
        <CardDeck>
          <Card style={{ width: '18rem' }}>
            <Card.Img class="cardImage" variant="top" src={this.props.url} />
            <Card.Body>
              <Card.Title>{this.props.sanskrit_name}</Card.Title>
              <Card.Text>{this.props.english_name}</Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </>
    );
  }
}
export default Asana;
