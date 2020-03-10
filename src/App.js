import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home  from './components/Home';
import Blogs from './components/Blogs';
import SignIn  from './components/SignIn';
import Navbar from "./components/navbar";
import Footer from "./components/Footer"

function App() {
  return (
    <React.Fragment>
    <Router>
    <Navbar/>
    
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Blogs" component={Blogs} />
    <Route path="/signIn" exact component={SignIn} />
    <Route path="/home" component={Home} />
    

  </Switch>
    <Footer/>
    </Router>
    </React.Fragment>
  );
}

export default App;
