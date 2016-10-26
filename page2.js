import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class page2 extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  render() {
    return (
      <View>
        <Text>Hello World Page 2</Text>
        <TouchableOpacity onPress={() => this.props.navigator.pop()}>
          <Text>Back to page 1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}