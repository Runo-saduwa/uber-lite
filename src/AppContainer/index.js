import React, {PropTypes} from 'react';
import {Router} from 'react-native-router-flux';
import {Provider} from 'react-redux';


export default AppContainer = ({store}) => {
    return (
        <Provider store={store}>
            <Router>
    <Stack key="root">
      <Scene key="login" component={Login} title="Login" />
      <Scene key="register" component={Register} title="Register" />
      <Scene key="home" component={Home} />
    </Stack>
  </Router>
        </Provider>
    )
}

AppContainer.propTypes = {
    store: PropTypes.object.isRequired
  }
