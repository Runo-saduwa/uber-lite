import React from 'react';
import {Router, Actions, Scene, Stack} from 'react-native-router-flux';

import HomeContainer from './Home/containers/HomeContainer';


const scenes = Actions.create(

    
            <Scene key="home" component={HomeContainer} title="home" initial/>
    

)


export default scenes;
