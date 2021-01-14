import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import categoriesReducer from 'store/categories/reducer';

const appReducer = combineReducers({
  categoriesState: categoriesReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

const initialisedStateWithDefaults = objState => {
  return objState;
};

export default function configureStore(objPreloadedState = {}) {
  const objInitialisedState = initialisedStateWithDefaults(objPreloadedState);

  const arrMiddlewares = [thunk];

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
