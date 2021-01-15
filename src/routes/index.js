import React, { lazy } from 'react';
import constants from '../constants';
import { Switch, useLocation, Redirect, Route } from 'react-router';
import ErrorPage from 'containers/ErrorPage';
import MilkmanAppRoute from 'components/common/MilkmanAppRoute';

const Home = lazy(() => import('containers/Home'));
const Category = lazy(() => import('containers/Category'));

const { ROOT, CATEGORY, ERROR_URL } = constants;

const getPageTitle = title => `${title} - Milkman Application test`;

const routerMapper = [
  {
    path: ROOT,
    title: getPageTitle('Milkman Home Page'),
    component: Home,
  },

  {
    path: CATEGORY,
    title: getPageTitle('Milkman Category Page'),
    component: Category,
  },
];

const Routes = () => {
  const { pathname } = useLocation();
  return (
    <Switch>
      <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
      {routerMapper.map(route => (
        <MilkmanAppRoute
          key={route.path}
          exact
          path={route.path}
          title={route.title}
          ui={route.ui}
          component={route.component}
        />
      ))}
      <Route exact path={ERROR_URL} component={ErrorPage} />
    </Switch>
  );
};

export default Routes;
