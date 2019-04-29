import React, { Component } from "react";
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {

  // state = {
  //   posts: [ ]
  // }

  // //that's the point in component lifecicle when we make request to the server
  // componentDidMount() { 
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => { 
  //       console.log(response);
  //       //get data from response and put into state.posts array
  //       this.setState({
  //         posts: response.data.slice(0, 10)
  //       })
  //     })
  // }
  render() {

    console.log(this.props)

    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => { 
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="ball"/>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className = "center">No posts yet!</div>
      );

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);
