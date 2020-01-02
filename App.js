import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View} from 'react-native';

import Home from './src/routes/Home/components/Home';

import {Provider} from 'react-redux';
import store from './src/store';



export default function App() {
  return (
     <Provider store={store}>
<AppContainer/>
     </Provider>
    
  );
}


class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}
  const RootStack = createStackNavigator(
    {
      Home: Home,
      Details:DetailsScreen
    },
    {
      initialRouteName: 'Home',
    }
  ); 
  const AppContainer = createAppContainer(RootStack);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
