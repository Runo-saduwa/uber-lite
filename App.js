import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/routes/Home/components/Home';

import {Provider} from 'react-redux';
import store from './src/store';
// import Root from './src/main';


  const RootStack = createStackNavigator(
    {
      Home: Home   
    }
  ); 
  const AppContainer = createAppContainer(RootStack);


export default function App() {
  return (
     <Provider store={store}>
<AppContainer/>
     </Provider>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
