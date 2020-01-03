import { SET_LOCATION,
     ERROR_LOCATION, GET_INPUT, 
     TOGGLE_SEARCH_RESULT, 
     GET_ADDRESS_PREDICTIONS,
     GET_SELECTED_ADDRESS,
     GET_DISTANCE_MATRIX
    } from './types';
const apiKey = 'AIzaSyA9ztxrVhOUBLHw03PzbZlo1Pka1bbNX_8';

 export const getUserLocation = () => (dispatch) => {
	navigator.geolocation.getCurrentPosition(
        (position) => {
            dispatch({
               type:SET_LOCATION,
               payload: position
            });
            // console.log(position)
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


 export const getSelectedAddress = (payload) => async (dispatch, getState) => {
       const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${payload}&key=${apiKey}`;
       

       try {
        const result = await fetch(apiUrl);
        const json = await result.json();
         //console.log(json.result.name, payload, json.result.geometry.location);
        dispatch({
            type: GET_SELECTED_ADDRESS,
            // payload: json.result.name,
            payload: {
                name: json.result.name,
                latitude: json.result.geometry.location.lat,
                longitude: json.result.geometry.location.lng
            }
        })

        console.log(getState().home.selectedAddress.selectedPickUp,getState().home.selectedAddress.selectedDropOff)


        try {
            if(getState().home.selectedAddress.selectedPickUp && getState().home.selectedAddress.selectedDropOff){
                console.log('hello world!!!')
                 const distanceMatrixApi = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${getState().home.selectedAddress.selectedPickUp.latitude},${getState().home.selectedAddress.selectedPickUp.longitude}&destinations=${getState().home.selectedAddress.selectedDropOff.latitude},${getState().home.selectedAddress.selectedDropOff.longitude}&mode=driving&key=AIzaSyA9ztxrVhOUBLHw03PzbZlo1Pka1bbNX_8`;
                 const result = await fetch(distanceMatrixApi);
                 const json = await result.json();
                 console.log(json)
                 dispatch({
                     type: GET_DISTANCE_MATRIX,
                     payload: json
                 })
            }
        } catch(e) {
               console.log(e);
        }
        
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

 