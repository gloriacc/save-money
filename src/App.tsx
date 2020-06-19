import React from 'react';
import './App.scss';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Tags from './views/Tags';
import Bills from './views/Bills';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/bills"/>
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/bills">
          <Bills />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
