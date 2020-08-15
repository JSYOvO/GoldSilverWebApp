import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from './Components/AppTab';
import AppTrend from './Components/AppTrend';
import AppUserData from './Components/AppUserData';

class App extends React.Component{
  render(){
    return(
      <div>
        <AppBar/>
        <AppUserData/>
        <AppTrend/>
      </div>
    )
  }
}

export default App;
