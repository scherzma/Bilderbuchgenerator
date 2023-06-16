import { SET_ERROR, SET_SESSION } from './Types';

const initianlState = {
  authToken: null,
  isLoggedin: false,
  error: null,
};

// eslint-disable-next-line default-param-last
export default function (state = initianlState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_SESSION:
        console.log('SET_SESSION');
      return {
        ...state,
        isLoggedin: true,
      };
    case SET_ERROR:
      return {
        ...state,
        isLoggedin: true,
      };
    default:
      return state;
  }
}
