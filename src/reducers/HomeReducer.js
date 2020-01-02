
 import {SET_NAME, ERROR_LOCATION, SET_LOCATION} from '../actions/types';


const initialState = {
  name: 'yooo',
  latitude: '',
  longitude: '',
  error: ''
};


export const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATION:
          return {
            ...state,
            latitude: action.payload.coords.latitude,
            longitude: action.payload.coords.longitude
          };
        case ERROR_LOCATION:
          return {
            ...state,
            error: action.payload
          };
        default:
          return state;
      }
}