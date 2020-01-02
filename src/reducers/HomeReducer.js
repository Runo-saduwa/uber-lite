
 import { ERROR_LOCATION, SET_LOCATION, GET_INPUT, TOGGLE_SEARCH_RESULT, GET_ADDRESS_PREDICTIONS} from '../actions/types';


const initialState = {
  name: 'yooo',
  latitude: '',
  longitude: '',
  error: '',
  inputData: {},
  resultTypes: {},
  predictions: []
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
          case GET_INPUT:
            const {key, value} = action.payload 
          return {
              ...state,
              inputData: {
                [key]: value
              }
          };
          case TOGGLE_SEARCH_RESULT: 
          console.log(action.payload)
          if(action.payload === "pickUp"){
            return {
              ...state,
              resultTypes: {
                pickUp: true,
                dropOff: false
              },
              predictions: []
            }
          }
          if(action.payload === "dropOff"){
            return {
              ...state,
              resultTypes: {
                pickUp: false,
                dropOff: true
              },
              predictions: []
            }
          };
          case GET_ADDRESS_PREDICTIONS: 
          return {
            ...state,
            predictions: action.payload
          }
        default:
          return state;
      }
}