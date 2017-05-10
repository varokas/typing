import React, { Component } from 'react';
import TypeBoard from './TypeBoard';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { text: "a" }

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  
  handleKeyDown(e) {
    let key = e.key;
    this.setState({ text: this.state.text + key });
  }

  render() {
    return (
      <TypeBoard text="abc"/>
    );
  }

  componentDidMount() {
    document.body.onkeydown = this.handleKeyDown;
  }

  componentWillUnMount() {
    document.body.onkeydown = undefined;
  }
}

export default App;