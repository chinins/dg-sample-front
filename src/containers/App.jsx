import React from 'react';

const baseUrl = 'http://localhost:8080';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: {}
    };
  }

  componentDidMount() {
    this.fetchHome();
  }

  fetchHome() {
    fetch(`${baseUrl}/home`)
      .then(res => res.json())
      .then(res => this.setState({ home: res }));
  }

  render() {
    return (
      <div>
        <div>{this.state.home.title}</div>
        <div>{this.state.home.content}</div>
      </div>
    );
  }
}

export default App;
