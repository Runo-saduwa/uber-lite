import { SET_LOCATION, ERROR_LOCATION, GET_INPUT, TOGGLE_SEARCH_RESULT, GET_ADDRESS_PREDICTIONS} from './types';
const apiKey = 'AIzaSyA9ztxrVhOUBLHw03PzbZlo1Pka1bbNX_8';

 export const getUserLocation = () => (dispatch) => {
	navigator.geolocation.getCurrentPosition(
        (position) => {
            dispatch({
               type:SET_LOCATION,
               payload: position
            });
            console.log(position)
        },
        (error) => dispatch({type: ERROR_LOCATION, payload: error.message }),
        { enableHighAccuracy: true, maximumAge: 2000, timeout: 2000 }
    );
 };

 export const getAddressPredictions = () => async (dispatch, getState) => {
    let userInput = getState().home.resultTypes.pickUp ? getState().home.inputData.pickUp : getState().home.inputData.dropOff;
    let latitude = getState().home.latitude;
    let longitude = getState().home.longitude

    const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${apiKey}&input=${userInput}&location=${latitude},${longitude}&radius=100`;
    try {
        const result = await fetch(apiUrl);
        const json = await result.json();
    
        dispatch({
            type: GET_ADDRESS_PREDICTIONS,
            payload: json.predictions
        })
    } catch (e) {
        console.log(e);
    }
 }


 export const getInputData = (payload) => {
     return {
         type: GET_INPUT,
         payload
     }
 }

 
 export const toggleSearchResult = (payload) => {
     return {
         type: TOGGLE_SEARCH_RESULT,
         payload
     }
 }

 