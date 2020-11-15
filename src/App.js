import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import AppBar from './Components/AppTab';
import AppTrend from './Components/AppTrend';
import Main from './Components/Main/Main.js';
class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="app">
          <Switch>
            <Route path="/main">
              <Main/>
            </Route>
            <Route path="/">
                <Main/>
              </Route>
          </Switch>
        </div>
      </Router>
      
    )
  }
}

export default App;
