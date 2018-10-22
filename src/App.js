/**
 * created by Ajor on 20-10-2018
*/
//=============================================================================

import React, { Component } from 'react';
import Main from "./components/Main";
import Nav from "./components/Nav";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main/>   
      </div>
    );
  }
}

export default App;
