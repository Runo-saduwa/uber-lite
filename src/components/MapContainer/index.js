import React from 'react';
import {View} from 'native-base';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

import styles from './styles';
const MapContainer = () => {
    const region = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    return (
        <View style={styles.container}>
            <MapView
            region={region}
            style={styles.map}
            >
               <Marker
               coordinate={region}
               />
           </MapView>
        </View>
    )
}

export default MapContainer;