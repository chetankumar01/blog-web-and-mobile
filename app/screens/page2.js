import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import Style from '../assets/style';
import NavBar from '../component/header-nav';

let Styles =  StyleSheet.create(Style);

export default class page2 extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <NavBar title="Page 3" onRightPress={() => this.props.navigator.pop()} />   
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

