import React, { useEffect } from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import HeaderContainer from '../../../components/Header';
import FooterContainer from '../../../components/Footer';
import MapContainer from '../../../components/MapContainer';
import {Container} from 'native-base';
import {getInputData, toggleSearchResult, getAddressPredictions} from '../../../actions/homeActions';

// import action creator from actions


const Home = ({navigation, getInputData, inputData, toggleSearchResult, getAddressPredictions, resultTypes, predictions}) => {
//   console.log(inputData.pickUp, inputData.dropOff)
    // useEffect(() => {
          

    //     // return () => {
    //     //     cleanup
    //     // };
    // }, [])
    return (
        <Container>
{/* <Text>Hello World {name}</Text>
              <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        /> */}
        <HeaderContainer/>
        <MapContainer 
        getInputData={getInputData} 
        toggleSearchResult={toggleSearchResult}
         getAddressPredictions={getAddressPredictions}
          resultTypes={resultTypes}
          predictions={predictions}
          />
          <FooterContainer/>
        </Container>
    )
}

const mapStateToProps = (state) => {
   return {
    inputData: state.home.inputData || {},
    resultTypes: state.home.resultTypes || {},
    predictions: state.home.predictions || []
   } 
}




export default connect(mapStateToProps, {getInputData, toggleSearchResult, getAddressPredictions})(Home);
