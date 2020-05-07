import React, { Component } from 'react';
import './resources/styles.css'
import Header from './components/header_footer/Header'
import Footer from './components/header_footer/Footer'
import Description from './components/highlights/Description'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'
import Welcome from './components/header_footer/Welcome';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Header/>
        <Welcome/>
        <Description/>
        <Works/>
        <Contact/>
        <Footer/>
       
      </div>
    )
  }
}

export default App;
