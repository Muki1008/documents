import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Toolbar/Header';
import SideMenu from './components/Toolbar/SideMenu';
import {BrowserRouter, Route} from 'react-router-dom';
import Start from './components/Toolbar/Start';
import ReactApp from './components/Toolbar/ReactApp';
import DojoApp from './components/Toolbar/DojoApp';


class App extends Component{
  render() {
    return ( 
      <>
      <BrowserRouter>
        <Header />
        <div className = 'flexMain'> 
          <SideMenu />  

          <div className="Container">
            <Route path = '/Start' component = {Start} />
            <Route path = '/ReactApp' component = {ReactApp} />
            <Route path = '/DojoApp' component = {DojoApp} />
          </div>
        </div>
      </BrowserRouter>
      
      </>
    );
  } 
}
export default App;
