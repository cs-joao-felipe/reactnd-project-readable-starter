import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as Api from './utils/api'
import Posts from './components/posts'
import './App.css'

class App extends Component {

  state = {
    posts: new Map()
  }

  upVote = (id) => {
    let post = this.state.posts.get(id)
    post.voteScore += 1
    this.setState((previousState) => ({
      posts: previousState.posts.set(id, post)
    }))
    Api.upVotePostById(id);
  }

  downVote = (id) => {
    let post = this.state.posts.get(id)
    post.voteScore -= 1
    this.setState((previousState) => ({
      posts: previousState.posts.set(id, post)
    }))
    Api.downVotePostById(id);
  }
  
  componentDidMount() {
    Api.getAllPosts().then((posts) => {
      var mapPosts = new Map()
      posts.map(post => mapPosts.set(post.id, post))

      this.setState({ posts: mapPosts })
    })
  }

  render() {
    const { posts } = this.state
    return (
      < div className="App" >
        <Route exact path="/" render={() => (
          <Posts posts={Array.from(posts.values())} upVote={this.upVote} downVote={this.downVote} />
        )} />
      </div >
    )
  }
}
export default App
