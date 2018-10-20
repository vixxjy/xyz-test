import React, { Component } from 'react';
import Header from "./components/Header";
import GridBox from "./components/GridBox";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <GridBox />
      </div>
    );
  }
}

export default App;
