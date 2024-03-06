
import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    
    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} key="General" pageSize={5} country='in' category='General'/>}/>
          <Route exact path="/Business" element={<News setProgress={this.setProgress} key="Business" pageSize={5} country='in' category='Business'/>}/>
          <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} key="Entertainment" pageSize={5} country='in' category='Entertainment'/>}/>
          <Route exact path="/Health" element={<News setProgress={this.setProgress} key="Health" pageSize={5} country='in' category='Health'/>}/>
          <Route exact path="/General" element={<News setProgress={this.setProgress} key="General" pageSize={5} country='in' category='General'/>}/>
          <Route exact path="/Science" element={<News setProgress={this.setProgress} key="Science" pageSize={5} country='in' category='Science'/>}/>
          <Route exact path="/Sports" element={<News setProgress={this.setProgress} key="sports" pageSize={5} country='in' category='sports'/>}/>
          <Route exact path="/Technology" element={<News setProgress={this.setProgress} key="Technology" pageSize={5} country='in' category='Technology'/>}/>
        </Routes>
        </Router>
      </div>
    )
  }
}
