import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import Style from './style';
import NavBar from './header-nav';

let Styles =  StyleSheet.create(Style);

export default class page2 extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <NavBar title="Page 3" onRightPress = {() => this.props.navigator.pop()} />   
        <TextInput
          style={Styles.textField}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder="Enter your name"
        />
      </View>
    );
  }
}

