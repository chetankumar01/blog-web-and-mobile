import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

let Styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 25,
    backgroundColor: 'aliceblue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  headerTitle: {
    fontSize: 24,
  },
})
const Header = ({title, rightAction}) => {
  return (
    <View style={Styles.headerContainer}>
      <Text style={Styles.headerTitle}>{title}</Text>
      {rightAction}
    </View>
  );
}

Header.propTypes = {
  title: React.PropTypes.string,
  rightAction: React.PropTypes.object,
}

export default Header
