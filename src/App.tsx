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
import {Statistics} from './views/Statistics';
import NoMatch from './views/NoMatch';
import {Tag} from './views/Tag';
import {TagAdd} from './views/TagAdd';
import {Details} from './views/Details';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/bills"/>
        <Route exact path="/details">
          <Details />
        </Route>
        <Route exact path="/tags">
          <Tags />
        </Route>
        <Route exact path="/tags/add">
          <TagAdd />
        </Route>
        <Route exact path="/tags/:id">
          <Tag />
        </Route>
        <Route exact path="/bills">
          <Bills />
        </Route>
        <Route exact path="/statistics">
          <Statistics />
        </Route>
        <Route exact path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
