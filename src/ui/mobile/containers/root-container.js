import React from 'react'
import { Navigator } from 'react-native'
import  { BlogFeedScreen } from '../screens'

class Root extends React.PureComponent {
  render() {
    const initialRoute = { component: BlogFeedScreen };
    return (
      <Navigator
          initialRoute={initialRoute}
          renderScene={(route, navigator) => <route.component navigator={navigator} />}
      />
    );
  }
}

export default Root;
