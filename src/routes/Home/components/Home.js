import React, { useEffect } from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {setName} from '../../../actions/homeActions';
import MapContainer from '../../../components/MapContainer';
import {Container} from 'native-base';

// import action creator from actions


const Home = ({name, setName, navigation}) => {

    useEffect(() => {
          

        setName()
        // return () => {
        //     cleanup
        // };
    }, [])
    return (
        <Container>
{/* <Text>Hello World {name}</Text>
              <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        /> */}
        <MapContainer/>
        </Container>
    )
}

const mapStateToProps = (state) => {
   return {
    name: state.home.name
   } 
}




export default connect(mapStateToProps, {setName})(Home);
