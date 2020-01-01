import update from 'react-addons-update';
// import constants from './actionConstants';

// const {} = constants;


const initialState = {};


export const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOME:
          return {
            ...state
          };
        default:
          return state;
      }
}