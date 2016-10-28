import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

let styles = StyleSheet.create({
button: {
    backgroundColor : '#465677',
    height: 30,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    right : 0,
    top: 10, 
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const Button = ({text, onClick, style}) => {
  return (
    <TouchableOpacity onPress={onClick}  style={[styles.button, style]}  >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  text: React.PropTypes.string,
  onClick: React.PropTypes.func,
}

export default Button
