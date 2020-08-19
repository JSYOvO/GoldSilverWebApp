import React from 'react';
import './App.css';
import AppBar from './Components/AppTab';
import AppTrend from './Components/AppTrend';

class App extends React.Component{
  render(){
    return(
      <div>
        <AppBar/>
        <AppTrend/>
      </div>
    )
  }
}

export default App;
