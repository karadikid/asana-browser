import React, { Component } from 'react';
import './Add.css';


class Add extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    render() {
        return (
            <div className="center">
                <div className="card">
                    <form onSubmit={this.handleFormSubmit}>
                        <input
                            ref={(ref) => {this.sanskrit_name = ref}}
                            placeholder="Sanskrit Asana Name"
                            name="sanskrit_name"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <input
                            ref={(ref) => {this.english_name = ref}}
                            placeholder="English Pose Name"
                            name="english_name"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <input
                            ref={(ref) => {this.img_url = ref}}
                            placeholder="http://path/to/image"
                            name="img_url"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <input
                            ref={(ref) => {this.id = ref}}
                            placeholder="# between 50-100"
                            name="id"
                            type="number"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-submit"
                            value="SUBMIT"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        );
    }

 handleFormSubmit(event){ 
  event.preventDefault();
  fetch('https://yogapi.herokuapp.com', {
   method: 'POST',
   headers: {
       'Content-Type':'application/json'
       'Access-Control-Allow-Origin':'*',
       },
   body: {
    "sanskrit_name" : this.sanskrit_name.value,
    "english_name" : this.english_name.value,
    "img_url" : this.img_url.value
   }
  })
  }
    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
}

export default Add;