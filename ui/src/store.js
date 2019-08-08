import { createStore } from 'redux'

const initialState = {
  login : '',
  password: '',
  isLoggedIn: false,
  token: ''
}

function reducer(state, action) {
  let newState = {...state};

  switch (action.type) {
    case 'LOGIN_CHANGE':
      newState.login = action.payload;
      break;
    case 'PASSWORD_CHANGE':
      newState.password = action.payload;
      break;
    case 'LOGIN_OK':
      newState.isLoggedIn = true;
      newState.token = action.payload;
      localStorage.setItem("token",action.payload);
      break;
    case 'LOGIN_BAD':
      newState.isLoggedIn = false;
      localStorage.setItem("token",'');
      break;
    default:
      return newState;
  }

  return newState;
}

export const store = createStore(reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
