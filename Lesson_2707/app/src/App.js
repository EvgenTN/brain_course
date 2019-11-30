import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/HomePage';
import About from './containers/About';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './components/Header';
class App extends Component {

  render() {
    const menu = [
      {
        name: 'Home',
        href: '/Home',
      },
      {
        name: 'About',
        href: '/About',
      }
    ]
    return (
      <Router>
        <div className="App">
          {/* <Header 
            data={menu}
          /> */}
          <Route path='/' component={Header} />
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
