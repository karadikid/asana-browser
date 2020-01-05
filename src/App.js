import React, { Component } from "react";
import "./App.css";
import Asana from "./components/Asana";
import CardColumns from "react-bootstrap/CardColumns";

const url = "https://yogapi.herokuapp.com";

class App extends Component {
  constructor() {
    super();
    this.state = {
      asanas: []
    };
  }

  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          asanas: data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    let asanaData = this.state.asanas.map(items => {
      return (
        <Asana
          key={items.id}
          sanskrit_name={items.sanskrit_name}
          english_name={items.english_name}
          url={items.img_url}
        />
      );
    });

    return (
      <>
        <div className='asanaBrowser'>
        <h1>Asana Browser</h1>
        <button className='cardButton' onClick=''>Add</button>
        <button className='cardButton' onClick=''>Remove</button>
        <CardColumns>
          <ul className="cardObject">{asanaData}</ul>
        </CardColumns>
        </div>
      </>
    );
  }
}

export default App;
