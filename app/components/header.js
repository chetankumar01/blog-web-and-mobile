import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Style from '../assets/style';

let Styles =  StyleSheet.create(Style);

const Header = (props) => {
  return (
    <View style={Styles.navBar}>
      <Text style={Styles.text}>{props.title}</Text>
      <TouchableOpacity onPress={props.onRightPress}  style={Styles.button} />
    </View>
  );
}

Header.propTypes = {
  title: React.Proptypes.string,
  onRightPress: React.Proptypes.func,
}

export default Header
