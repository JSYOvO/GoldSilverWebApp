import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Join from './Components/Join/Join';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Router>
    </div>
  );
}

export default App;
