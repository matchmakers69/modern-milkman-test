import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import uiReducer from 'store/ui/reducer';
import categoriesReducer from 'store/categories/reducer';

export const history = createBrowserHistory();
const appReducer = combineReducers({
  uiState: uiReducer,
  categoriesState: categoriesReducer,
  router: connectRouter(history),
});

const rootReducer = (state, action) => appReducer(state, action);

const initialisedStateWithDefaults = objState => {
  return objState;
};

export default function configureStore(objPreloadedState = {}) {
  const objInitialisedState = initialisedStateWithDefaults(objPreloadedState);

  const arrMiddlewares = [thunk, routerMiddleware(history)];

  const enhancerMiddleware = applyMiddleware(...arrMiddlewares);

  const arrEnhancers = [enhancerMiddleware];

  const composeEnhancers = composeWithDevTools({ serialize: true });
  const composedEnhancers = composeEnhancers(...arrEnhancers);

  const store = createStore(
    rootReducer,
    objInitialisedState,
    composedEnhancers
  );

  return store;
}
