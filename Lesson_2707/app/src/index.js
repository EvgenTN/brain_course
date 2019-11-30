import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/style/index.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './containers/HomePage';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();