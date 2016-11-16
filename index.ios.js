import React from 'react'
import { AppRegistry } from 'react-native'
import  { RootContainer } from './src/ui/mobile/containers'

class blogWebAndMobile extends React.PureComponent {
  render() {
    return (
      <RootContainer />
    );
  }
}

AppRegistry.registerComponent('blogWebAndMobile', () => blogWebAndMobile);
