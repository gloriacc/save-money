import React from 'react';
import './App.scss';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Layout from 'components/Layout';

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

function Tags() {
  return (
    <Layout>
      <h2>Tags</h2>
    </Layout>
  );
}

function Bills() {
  return (
    <Layout>
      <h2>Bills</h2>
    </Layout>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>Statistics</h2>
    </Layout>
  );
}
function NoMatch() {
  return <h2>页面不存在</h2>;
}

export default App;
