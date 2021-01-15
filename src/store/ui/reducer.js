import { UPDATE_UI } from './types';

const objInitialState = {
  displayBanner: false,
};

const uiReducer = (state = objInitialState, action) => {
  switch (action.type) {
    case UPDATE_UI:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default uiReducer;
