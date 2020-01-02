import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {View, Input, InputGroup} from 'native-base';
import styles from './styles';


const SearchBox = () => {
   
    return (
        <View style={styles.searchBox}>
            <Text style={styles.label}>
               PICK UP
            </Text>
            <InputGroup>
                <Input style={styles.inputSearch} placeholder="Choose Pick-up Location"/>
            </InputGroup>
        </View>
    )
}

export default SearchBox;