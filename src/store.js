import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const initialState = {};

// Middleware array
const middleware = [thunk]

const store = createStore(
    rootReducer,

     compose (
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()) ||
      compose
)
  )


  export default store;