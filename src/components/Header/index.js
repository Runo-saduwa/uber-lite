import React from 'react';
import {Header, Left, Body, Right, Button} from 'native-base';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const HeaderContainer = () => {
 return (
      <Header style={{backgroundColor: "#1fbad6"}} iosBarStyle="light-content">
          <Left>
              <Button transparent>
                  <Icon name="bars" style={styles.icon}/>
              </Button>
          </Left>
          <Body>
              <Text style={styles.headerText}>Uber</Text>
          </Body>
          <Right>
              <Button transparent>
                  <Icon name="gift" style={styles.icon}/>
              </Button>
          </Right>
      </Header>
 )
}


export default HeaderContainer;