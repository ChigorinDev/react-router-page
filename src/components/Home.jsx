import React, { Component } from "react";
import axios from 'axios';

class Home extends Component {
  componentDidMount() { 
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => { 
        console.log(res);
      })
  }
  render() {
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          praesentium veniam consectetur odio excepturi neque modi repudiandae
          ratione provident in sed, pariatur nam eaque, numquam id, deserunt
          tenetur sequi assumenda.
        </p>
      </div>
    );
  }
}

export default Home;
