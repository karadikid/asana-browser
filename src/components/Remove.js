import React, { Component } from "react";
import "./Add.css";
const url = 'https://yogapi.herokuapp.com/delete';

class Add extends Component {
  constructor() {
    super();
    this.state = {
      english_name: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

    handleFormSubmit(event) {
    event.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        english_name: this.state.english_name
      })
    });
    console.log(event)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state)
  }

  render() {
    return (
      <div className="center">
        <div className="card">
          <form onSubmit={this.handleFormSubmit}>
            <input
              placeholder="English Pose Name"
              name="english_name"
              type="text"
              onChange={this.handleChange}
            />
            <input className="form-submit" value="SUBMIT" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Add;
