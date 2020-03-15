import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Toolbar from './Toolbar';
import Homepage from './Homepage';
import MatchDetail from './MatchDetail';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Toolbar />
        <div className="content">
          <Switch>
            <Route path="/match/:id" component={MatchDetail} />
            <Route path="/" component={Homepage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
