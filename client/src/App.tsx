import React from 'react';
import logo from './logo.svg';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import { Box } from '@chakra-ui/layout';
import Login from './Components/Login/Login';
import Join from './Components/Join/Join';
function App() {
  return (
    <div className="App">
      <Box>
        <Router>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/join" component={Join} />
        </Router>
      </Box>
    </div>
  );
}

export default App;
