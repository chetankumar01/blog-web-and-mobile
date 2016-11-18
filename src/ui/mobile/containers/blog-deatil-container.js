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
})

  class BlogFeedDetailContainer extends React.PureComponent {
    constructor(props){
      super(props);
      this.state = {
      }
    }

    render() {
        const blogData = this.props.blogData;
      return (
         <View style={{flex:1}}>
          <Text style={Styles.titleText}>{blogData.title}</Text>
          <Text style={Styles.bodyText}>{blogData.body}</Text>
        </View>
      );
    }
  }
export default BlogFeedDetailContainer