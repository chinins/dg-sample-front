import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../App.css';
import Header from '../components/Header';
import Home from '../components/Home';
import PostsList from '../components/PostsList';
import PostDetail from '../components/PostDetail';

const baseUrl = 'http://localhost:8080';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: {},
      posts: [],
      postDetails: {}
    };
  }

  componentDidMount() {
    this.fetchHome();
    this.fetchPosts();
  }

  fetchHome() {
    fetch(`${baseUrl}/home`)
      .then(res => res.json())
      .then(res => this.setState({ home: res }));
  }

  fetchPosts() {
    fetch(`${baseUrl}/posts`)
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }

  fetchSpecificPost(postName) {
    fetch(`${baseUrl}/post/${postName}`)
      .then(res => res.json())
      .then(post => {
        this.setState({ postDetails: post });
      });
  }

  render() {
    const appStyle = {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      background: 'linear-gradient(#00FFFF, #7FDBFF)'
    };

    return (
      <Router>
        <div className="App" style={appStyle}>
          <Header />
          <Switch>
            <Route exact path="/(home)?" render={() => <Home home={this.state.home} />} />
            <Route
              exact
              path="/posts"
              render={() =>
                <PostsList
                  posts={this.state.posts}
                  onFetchPost={this.fetchSpecificPost.bind(this)}
                />} />
            <Route
              exact
              path="/posts/:name"
              render={() => <PostDetail post={this.state.postDetails} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
