import React from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';

const Styles = StyleSheet.create({
  textField: {
    fontSize: 12,
    fontWeight: 'bold',
    height: 40,
    paddingHorizontal: 10,
    marginVertical: 5
  }
})
  const CustomTextInput = ({placeholder, value, onChange, multiline}) => {
    return (
      <TextInput
          style={Styles.textField}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          multiline={multiline}
      />
    );
  }

CustomTextInput.propTypes = {
  placeholder: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
}

export default CustomTextInput
