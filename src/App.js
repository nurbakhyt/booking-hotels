import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/Navbar/Nav';
import Hotels from './components/Hotels';
import Hotel from './components/Hotel';

import './App.css';

function App() {

  console.log('fetching ..');

  return (
    <Router>
      <div className="app">
        <NavBar />

        <Switch>
          <Route path="/" exact component={Hotels} />
          <Route path="/hotels/:id" component={Hotel} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
