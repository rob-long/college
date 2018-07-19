import * as C from './constants';

// automatic dispatch
export const setSearchField = event => ({
  type: C.CHANGE_SEARCHFIELD,
  payload: event.target.value,
});

// manual dispatch with thunk
export const fetchRobots = () => async dispatch => {
  dispatch({ type: C.FETCH_ROBOTS_PENDING });
  try {
    const link = 'https://jsonplaceholder.typicode.com/users';
    const res = await fetch(link).then(response => response.json());
    console.log(res);
    dispatch({ type: C.FETCH_ROBOTS_SUCCESS, payload: res });
  } catch (err) {
    dispatch({ type: C.FETCH_ROBOTS_FAILED, payload: err });
  }
};
