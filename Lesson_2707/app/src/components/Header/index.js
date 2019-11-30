import React from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default (props) => {
  console.log(props);
  const menu = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    }
  ]
  return (
    <div>
      <header className='App-header'>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <nav className='menu'>
        {
          menu.map((item, id) => 
            <button 
              key={id} 
            >
              <Link 
                to={item.href}
              >
                {item.name}
              </Link>
            </button>
          )
        }
      </nav>
    </div>
  );
}