import React, { Component } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contacts' component={Contacts} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
