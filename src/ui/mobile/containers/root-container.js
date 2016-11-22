import React from 'react'
import { Navigator , AsyncStorage} from 'react-native'
import  { BlogFeedScreen } from '../screens'
import { Provider } from 'react-redux'
import { ConfigureStore } from '../../../state/store'


class Root extends React.PureComponent {
  render() {
    const initialRoute = { component: BlogFeedScreen };
    const store = ConfigureStore();
    return (
      <Provider store={store}>
        <Navigator
            initialRoute={initialRoute}
            renderScene={(route, navigator) => <route.component navigator={navigator} {...route.passProps} />}
        />
      </Provider>
    );
  }
}

export default Root;
