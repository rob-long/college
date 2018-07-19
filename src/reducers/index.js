import { combineReducers } from 'redux';
import * as constants from '../constants';

export const searchReducer = (state = '', action) => {
  switch (action.type) {
    case constants.CHANGE_SEARCHFIELD:
      return action.payload;
    default:
      return state;
  }
};

const initialStateRobots = {
  data: [],
  isPending: true,
};

export const robotsReducer = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case constants.FETCH_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case constants.FETCH_ROBOTS_SUCCESS:
      return Object.assign({}, state, { data: action.payload, isPending: false });
    case constants.FETCH_ROBOTS_FAILED:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  searchTerm: searchReducer,
  robots: robotsReducer,
});
