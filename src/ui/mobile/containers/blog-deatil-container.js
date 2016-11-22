import React from 'react'
import { View,
         AsyncStorage,
         StyleSheet,
         Text,
         Dimensions,
         ListView,
         TouchableOpacity,
} from 'react-native'
import { Button } from '../components'

import { connect } from 'react-redux'

let Styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bodyText: {
    fontSize: 12,
  },
  blogItem: {
    flex: 1,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'aliceblue'
  }
});

class BlogFeedDetailContainer extends React.PureComponent {
  render() {
    const blog = this.props.blog;
    return (
      <View style={{flex:1}}>
        <Text style={Styles.titleText}>{blog.title}</Text>
        <Text style={Styles.bodyText}>{blog.body}</Text>
      </View>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    blog: state.Feed.feedItems[Number(ownProps.blogIndex)]
  }
}

export default connect(mapStateToProps, {})(BlogFeedDetailContainer);
