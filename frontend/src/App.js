import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import * as Api from './utils/api'

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    Api.getAllPosts().then((posts) => {
      this.setState({ posts })
    })
  }


  render() {
    const { posts } = this.state
    return (

      < div className="App" >
        <Route exact path="/" render={
          () => (
            <div>
              <table className="books-grid">
                <thead>
                  <td>Title</td>
                  <td>Author</td>
                  <td>Up Votes</td>
                  <td>Date</td>
                </thead>
                <tbody>
                  {posts.length > 0 && posts.map((post) =>
                    <tr>
                      <td>{post.title}</td>
                      <td>{post.author}</td>
                      <td>{post.voteScore}</td>
                      <td>{post.timestamp}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )
        } />
      </div >
    );
  }
}

export default App;
