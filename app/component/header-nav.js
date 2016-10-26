import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Style from '../assets/style';

let Styles =  StyleSheet.create(Style);

export default class headerNav extends Component {
  render() {
    return (
      <View style={Styles.navBar}>
        <Text style={Styles.text}>{this.props.title}</Text>
        <TouchableOpacity onPress={() => this.props.onRightPress()}  style={Styles.button} />
      </View>
    );
  }
}