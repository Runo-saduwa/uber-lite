import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {View, Input, InputGroup} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
// import {getInputData} from '../../actions/homeActions';

const SearchBox = ({getInputData, toggleSearchResult, getAddressPredictions}) => {

    const handleInput = (key, val) => {
        // console.log(key, val)
        getAddressPredictions();
        getInputData({
             key,
             value: val
            })
    }
   
    return (
        <View style={styles.searchBox}>
            <View style={styles.inputWrapper}>
            <Text style={styles.label}>
               PICK UP
            </Text>
            <InputGroup>
                <Icon name="search" size={20} color="#1fbad6"/>
                <Input onFocus={() => {toggleSearchResult('pickUp')}} onChangeText={(text) => handleInput('pickUp', text) } style={styles.inputSearch} placeholder="Choose Pick-up Location"/>
            </InputGroup>
            </View>
            <View style={styles.secondInputWrapper}>
            <Text style={styles.label}>
               DROP-OFF
            </Text>
            <InputGroup>
                <Icon name="search" size={20} color="#1fbad6"/>
                <Input onFocus={() => toggleSearchResult('dropOff')} onChangeText={(text) => handleInput('dropOff', text)} style={styles.inputSearch} placeholder="Please Choose Your Drop-off Location"/>
            </InputGroup>
            </View>
        </View>
    )
}
// const mapStateToProps = (state) => {
//     return {
//      name: state.home.name
//     } 
//  }
 
 

export default SearchBox;