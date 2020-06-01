import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Random from './pages/randompage';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
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
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
