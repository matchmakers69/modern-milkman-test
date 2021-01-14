import React from 'react';
import Routes from 'routes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';

const App = () => {
  return (
    <MainTemplate>
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </MainTemplate>
  );
};

export default App;
