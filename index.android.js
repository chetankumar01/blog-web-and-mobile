import React from 'react'
import { AppRegistry } from 'react-native'
import  { Root } from './src/ui/mobile/containers'

class blogWebAndMobile extends React.PureComponent {
  render() {
    return (
      <Root />
    );
  }
}

AppRegistry.registerComponent('blogWebAndMobile', () => blogWebAndMobile);
