import React from 'react';
import Routes from 'routes';
import { Switch } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import NavigationSidebar from 'components/common/NavigationSidebar';

const App = () => {
  return (
    <MainTemplate>
      <>
        <NavigationSidebar />

        <Switch>
          <Routes />
        </Switch>
      </>
    </MainTemplate>
  );
};

export default App;
