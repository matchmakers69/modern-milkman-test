import React from 'react';
import Routes from 'routes';
import { Switch } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';

const App = () => {
  return (
    <MainTemplate>
      <Switch>
        <Routes />
      </Switch>
    </MainTemplate>
  );
};

export default App;
