import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../App.css';
import Header from '../components/Header';
import Home from '../components/Home';
import PostsList from '../components/PostsList';

const baseUrl = 'http://localhost:8080';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: {},
      posts: []
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

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            {/* <Route exact path="/" render={() => <Home home={this.state.home} />} /> */}
            <Route exact path="/(home)?" render={() => <Home home={this.state.home} />} />
            <Route exact path="/posts" render={() => <PostsList posts={this.state.posts} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
