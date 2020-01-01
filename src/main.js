import React from 'react';
import {View} from 'react-native';
import createStore from './store/createStore';
import AppContainer from './AppContainer/index';
const Root = () => {

    // const renderApp = () => {
    //     const initialState = window.__INITIAL_STATE__;
    //     const store = createStore(initialState);
    //     return <AppContainer store={store}/>

    // }

    // return renderApp();

        const initialState = window.__INITIAL_STATE__;
        const store = createStore(initialState);
        return <AppContainer/>



}


export default Root;