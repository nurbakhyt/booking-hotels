import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';
import NavBar from './components/Navbar/Nav';
import HotelsContainer from './containers/HotelsContainer';
import HotelContainer from './containers/HotelContainer';
import {setHotels} from './store/actions';

import './App.scss';

function App({dispatch}) {

  dispatch(setHotels());

  return (
    <Router>
      <div className="app">
        <NavBar />

        <main className="container">
          <Switch>
            <Route path="/" exact component={HotelsContainer} />
            <Route path="/hotels/:id" component={HotelContainer} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default connect()(App);
