import React, {useEffect} from 'react';
import {View} from 'native-base';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import {connect} from 'react-redux';
import {getUserLocation} from '../../actions/homeActions' 
import {Dimensions} from 'react-native';
import styles from './styles';
import SearchBox from '../SearchBox';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA;


const MapContainer = ({latitude, longitude, getUserLocation}) => {

    useEffect(() => {
          getUserLocation();
          
    }, [])
    const region = {
        latitude: latitude,
        longitude: longitude,
    	latitudeDelta: LATITUDE_DELTA,
		longitudeDelta: LONGITUDE_DELTA
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
           <SearchBox/>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
     latitude: state.home.latitude,
     longitude: state.home.longitude
    } 
 }
 
 

export default connect(mapStateToProps, {getUserLocation})(MapContainer);