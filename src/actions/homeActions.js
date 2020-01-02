import {SET_NAME, SET_LOCATION, ERROR_LOCATION} from './types';

export const setName = () => {
    return {
        type: SET_NAME,
        payload: 'runo'
    }
}

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