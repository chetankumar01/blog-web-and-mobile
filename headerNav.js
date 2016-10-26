import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';
import Style from './style';

let styles =  StyleSheet.create(Style);

export default class headerNav extends Component {
  render() {
    return (
      <View style={styles.navBar}>
       <Text style={Styles.text}>Welcome</Text>
          <TouchableOpacity onPress={() => this.props.navigator.push(page2)} style={Styles.button} />
    </View 
    );
  }
}