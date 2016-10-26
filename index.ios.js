/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';
import Page1 from './page1';

export default class blogWebAndMobile extends Component {
  render() {
    const initialRoute = { component: Page1 };
    return (
      <Navigator
        initialRoute={initialRoute}
        renderScene={(route, navigator) =>
          <route.component navigator={navigator} />
        }
      />
    );
  }
}

AppRegistry.registerComponent('blogWebAndMobile', () => blogWebAndMobile);
