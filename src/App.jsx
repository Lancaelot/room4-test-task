import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { Search } from './pages/Search';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import Nav from './components/Nav/Nav';

export const App = () => (
  <div className="app">
    <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/search" exact component={Search} />
      <Route path="/profile" component={Profile} />
    </Switch>
  </div>
);
