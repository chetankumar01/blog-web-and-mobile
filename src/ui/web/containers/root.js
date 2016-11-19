import React, { PropTypes } from 'react'
import Match from 'react-router/Match'
import { Provider } from 'react-redux'
import * as Screens from '../screens'

class Root extends React.PureComponent {
  static propTypes = {
    router: PropTypes.object.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
      hash: PropTypes.string.isRequired,
      state: PropTypes.any,
      key: PropTypes.string
    }).isRequired,
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <div id="routes">
          <Match exactly={true} pattern="/" component={Screens.Home} />
          <Match exactly={true} pattern="/feed" component={Screens.Feed} />
        </div>
      </Provider>
    );
  }

}

export default Root
