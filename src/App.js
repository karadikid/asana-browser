import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const url = "https://yogapi.herokuapp.com";

class Price extends Component {
  constructor(props){
    super(props)
    this.state = {
      asanas =  []
    };
  }
  
  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.setState {(
          asanas: data.map(item => ({
            id:  item.id,
            sanskrit_name: item.sanskrit_name,
            english_name: item.english_name,
            img_url: item.img_url
          }))
        )}
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return (
      <div>
        <h1>Asana Browser</h1>
        {/* <Asana key={item.id} item={item.sanskrit_name}/> */}
      </div>
    );
  }
}

export default App;