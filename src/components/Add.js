import React, { Component } from "react";
import "./Add.css";
const url = 'https://yogapi.herokuapp.com';

class Add extends Component {
  constructor() {
    super();
    this.state = {
      sanskrit_name: '',
      english_name: '',
      img_url: '',
      id: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

    handleFormSubmit(event) {
    event.preventDefault();
    alert('Submitted Reload Page, Click Remove Button and Use English Name to Remove.');
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        sanskrit_name: this.state.sanskrit_name,
        english_name: this.state.english_name,
        img_url: this.state.img_url,
        id: this.state.id
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
              placeholder="Sanskrit Asana Name"
              name="sanskrit_name"
              type="text"
              onChange={this.handleChange}
            />
            <input
              placeholder="English Pose Name"
              name="english_name"
              type="text"
              onChange={this.handleChange}
            />
            <input
              placeholder="http://path/to/image"
              name="img_url"
              type="text"
              onChange={this.handleChange}
            />
            <input
              placeholder="# between 50-100"
              name="id"
              type="number"
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
