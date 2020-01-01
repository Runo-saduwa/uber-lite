import React from 'react';
import {Provider} from 'react-redux';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {View, Text} from 'react-native';
//import Home from '../routes/Home/containers/HomeContainer';
import Home from '../routes/Home/components/Home';
// import scenes from '../routes/scenes';



  class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{fontSize: 70}}>Home Screen</Text>
        </View>
      );
    }
  }

  // const RootStack = createStackNavigator(
  //   {
  //     Home: HomeScreen   
  //   }
  // ); 
  // const MainContainer = createAppContainer(RootStack);

const AppContainer = ({store}) => {
    return (
        //<Provider store={store}>
          <Home/>
         //</Provider>
    )
}

export default AppContainer;

// AppContainer.propTypes = {
//     store: PropTypes.object.isRequired
//   }
