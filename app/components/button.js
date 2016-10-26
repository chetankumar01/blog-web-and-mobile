import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Style from '../assets/style';

let Styles =  StyleSheet.create(Style);

export default ({text, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick}  style={Styles.button} >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
