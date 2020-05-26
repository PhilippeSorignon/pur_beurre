import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ResultsTitle from './pages/ResultsTitle';
import ResultsCategory from './pages/ResultsCategory';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route path="/signup" component={ Signup } />
        <Route path="/search/:title" component={ ResultsTitle } />
        <Route path="/results/:category" component={ ResultsCategory } />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
