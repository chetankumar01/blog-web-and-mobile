import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
//import Style from '../assets/style';

//let Styles =  StyleSheet.create(Style);
let Styles = StyleSheet.create({
   text: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',  
      fontSize: 20,
      fontWeight: 'bold',
      padding : 20,
  },
  navBar: {
    marginBottom: 5,
    backgroundColor : '#667445', 
    height : 60,
    flexDirection: 'row'
  }
})
const Header = ({title, rightAction}) => {
  return (
    <View style={Styles.navBar}>
      <Text style={Styles.text}>{title}</Text>
      {rightAction}
    </View>
  );
}

Header.propTypes = {
  title: React.PropTypes.string,
  rightAction: React.PropTypes.object,
}

export default Header
