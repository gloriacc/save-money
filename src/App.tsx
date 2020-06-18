import React from 'react';
import './App.scss';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';
import Nav from 'components/Nav';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;



function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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
        </Main>
        <Nav/>
      </Wrapper>
    </Router>
  );
}

function Tags() {
  return <h2>Tags</h2>;
}

function Bills() {
  return <h2>Bills</h2>;
}

function Statistics() {
  return <h2>Statistics</h2>;
}
function NoMatch() {
  return <h2>页面不存在</h2>;
}

export default App;
