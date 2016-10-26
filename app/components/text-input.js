import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import Style from '../assets/style';

let Styles =  StyleSheet.create(Style);

export default ({placeholder, value, onChange}) => {
  return (
    <TextInput
        style={Styles.textField}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
    />
  );
}
