import React, { Component } from 'react';
import Navbar from './components/navbar'
import Carousel from './components/carousel'
import MainCards from './components/mainCards'
import BusinessHours from './components/businessHours'
import Footer from './components/footer'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Carousel/>
        <MainCards/>
        <BusinessHours/>
        <Footer/>
      </div>
    );
  }
}

export default App;
