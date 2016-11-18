import React from 'react';
import {
  StyleSheet,
  Button as ReactButton,
  View,
} from 'react-native';

const Button = ({title, onPress, children, wrapperStyle}) => {
  return (
    <View style={wrapperStyle}>
    <ReactButton onPress={onPress} title={title} color={'black'} />
    </View>
  );
}

Button.propTypes = {
  title: React.PropTypes.string,
  onPress: React.PropTypes.func,
  children: React.PropTypes.element,
  wrapperStyle: React.PropTypes.object,
}

export default Button
