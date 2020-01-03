import React from 'react';
import {Text} from 'react-native';
import {View, ListItem, List, Left, Body} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
//import { getSelectedAddress } from '../../actions/homeActions';


const SearchResults = ({predictions, getSelectedAddress}) => {
   const handleSelectedAddress = (id) => {
       getSelectedAddress(id)
   }
    return (
        <View style={styles.searchResultsWrapper}>
            <List
              dataArray={predictions}
              renderRow={(item) => {
                  return(
                      <View>
                              <ListItem onPress={() => handleSelectedAddress(item.place_id)} button avatar>
                <Left style={styles.leftContainer}>
                    <Icon style={styles.leftIcon} name="location-on"/>
                </Left>
             <Body>
                  <Text style={styles.primaryText}>{item.description}</Text>
                  <Text style={styles.secondaryText}>{item.description}</Text>
             </Body>
             </ListItem>
                      </View>
                  )
              }}
            />
        </View>
    )
}

export default SearchResults;