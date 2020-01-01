import React from 'react';
import {Provider} from 'react-redux';
import Home from '../routes/Home/components/Home';
import scenes from '../routes/scenes';

export default AppContainer = ({store}) => {
    return (
        <Provider store={store}>
            
        </Provider>
    )
}
// AppContainer.propTypes = {
//     store: PropTypes.object.isRequired
//   }
