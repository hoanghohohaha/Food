import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Random from './pages/randompage';
import Header from './components/header'
import Footer from './components/footer';
import Searchresult from './pages/searchpage';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/random">
            <Random />
          </Route>
          <Route exact path='/search'>
            <Searchresult />
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
