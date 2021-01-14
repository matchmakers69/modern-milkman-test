import React, { Suspense, lazy } from 'react';
import constants from '../constants';
import { Switch, Route, useLocation, Redirect } from 'react-router';

const Home = lazy(() => import('containers/Home'));
const Category = lazy(() => import('containers/Category'));

const { ROOT, CATEGORY } = constants;

const Routes = () => {
  const { pathname } = useLocation();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        <Route exact path={ROOT} component={Home} />
        <Route exact path={CATEGORY} component={Category} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
