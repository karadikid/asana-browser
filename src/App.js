import React, { Component } from "react";
import "./App.css";
import Asana from "./components/Asana";
import Add from "./components/Add";
import Remove from "./components/Remove";
import CardColumns from "react-bootstrap/CardColumns";
import { BrowserRouter, Route, Link } from "react-router-dom";

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
        <BrowserRouter>
          <div >
            <Route path='/'/>
            <Link to='/'>
            <h1>Asana Browser</h1>
            </Link>
            <Route path="/Add" exact component={Add} />
            <Link to="/Add">
              <button type="button">Add</button>
            </Link>
            <Route path="/Remove" exact component={Remove} />
            <Link to="/Remove">
              <button type="button">Remove</button>
            </Link>
            <CardColumns>
              <ul className="cardObject">{asanaData}</ul>
            </CardColumns>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
