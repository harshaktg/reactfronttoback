import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

// adding bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Header branding='Contact Manager' />
        <div className="container">
          <Contact name='Harsha Vardhan' email='harshaktg@gmail.com' phone='9876543210' />
          <Contact name='asdfasdf' email='asdf@asdf.com' phone='9898989898' />
        </div>
      </div>
    );
  };
}

export default App;
