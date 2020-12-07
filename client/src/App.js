import React, { Component } from 'react';
import Navbar from './components/navbar'
import Carousel from './components/carousel'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Carousel/>
      </div>
    );
  }
}

export default App;
