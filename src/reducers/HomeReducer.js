
 import {SET_NAME} from '../actions/types';


const initialState = {
  name: 'yooo'
};


export const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME:
          return {
            ...state,
            name: action.payload
          };
        default:
          return state;
      }
}