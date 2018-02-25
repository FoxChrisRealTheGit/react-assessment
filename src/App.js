import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import router from './router';

class App extends Component {
  render() {
    return (
      <section className="App">
        {router}
      </section>
    );
  }
}

export default App;
