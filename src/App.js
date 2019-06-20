import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import NavBar from './components/Navbar/Nav';
import HotelsContainer from './containers/HotelsContainer';
import Hotel from './components/Hotel';
import {setHotels} from './store/actions';

import './App.css';

function App({dispatch}) {

  dispatch(setHotels());

  return (
    <Router>
      <div className="app">
        <NavBar />

        <Switch>
          <Route path="/" exact component={HotelsContainer} />
          <Route path="/hotels/:id" component={Hotel} />
        </Switch>
      </div>
    </Router>
  );
}

export default connect()(App);
