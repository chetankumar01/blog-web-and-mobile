import React from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';
//import Style from '../assets/style';

//let Styles =  StyleSheet.create(Style);
 const Styles = StyleSheet.create({
 textField: {
      justifyContent: 'center',
      alignItems: 'center',  
      fontSize: 12,
      fontWeight: 'bold',
      borderRadius: 10,
      borderWidth: 2,
      height: 40, 
      borderColor: 'gray',
      margin: 10
  }
})
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
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
}

export default CustomTextInput
