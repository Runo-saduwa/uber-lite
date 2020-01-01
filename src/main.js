import React from 'react';
import {View} from 'react-native';

const Main = () => {

    const renderApp = () => {
        const initialState = window.__INITIAL_STATE_;
        const store = createStore(initialState);
        return {
            
        };

    }

    return renderApp();
}


export default Main;