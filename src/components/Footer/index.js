import React from 'react';
import {Footer, FooterTab, Button} from 'native-base';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const FooterContainer = () => {
    const tabs = [
        {
        title: "TaxiCar",
        subtitle: "",
        icon:'car'
    },
        {
        title: "TaxiShare",
        subtitle: "",
        icon:'car'
    },
        {
        title: "TaxiPremium",
        subtitle: "",
        icon:'car'
    },
        {
        title: "TaxiBike",
        subtitle: "",
        icon:'car'
    }
]
 return (
    <Footer>
         <FooterTab>

{
          tabs.map((obj, index) => {
             return (
                <Button key={index}>
                <Icon size={20} name={obj.icon} color={(index === 0 ? "#1fbad6":"#c0c0c8")} />
              <Text style={{fontSize:12, color:(index === 0 ? "#1fbad6":"#c0c0c8")}}>{obj.title}</Text>
              <Text style={styles.subTitle}>{obj.subtitle}</Text>
            </Button>
             )
          })
      }
   
  </FooterTab>
    </Footer>
 )
}


export default FooterContainer;