import React from 'react';
import {
  StyleSheet,
  Button as ReactButton,
  View,
} from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <View style={{backgroundColor: 'skyblue'}}>
    <ReactButton
        onPress={onPress}
        title={title}
        color={'black'}
    />
    </View>
  );
}

Button.propTypes = {
  title: React.PropTypes.string,
  onPress: React.PropTypes.func,
}

export default Button
