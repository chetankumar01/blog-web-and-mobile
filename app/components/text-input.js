import React from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';
import Style from '../assets/style';

let Styles =  StyleSheet.create(Style);

const CustomTextInput = ({placeholder, value, onChange}) => {
  return (
    <TextInput
        style={Styles.textField}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
    />
  );
}

CustomTextInput.propTypes = {
  placeholder: React.Proptypes.string,
  value: React.Proptypes.string,
  onChange: React.Proptypes.func,
}

export default CustomTextInput
