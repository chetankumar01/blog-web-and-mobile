import React from 'react'
import { View,
         AsyncStorage,
         StyleSheet,
         Text,
         Dimensions,
         ListView,
} from 'react-native'

var { width } = Dimensions.get('window');


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

  class BlogFeedContainer extends React.PureComponent {
    constructor(props){
      super(props);
      this.state = {
        blogs: [],
        ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
      }
    }

    componentWillMount() {
      AsyncStorage.getItem('blogs').then( (data) => {
        let blogs = JSON.parse(data);
        this.setState({blogs});
      });
    }

    renderBlog = (blogData) => {
      return (
        <View style={Styles.blogItem}>
          <Text style={Styles.titleText}>{blogData.title}</Text>
          <Text style={Styles.bodyText}>{blogData.body}</Text>
        </View>
      );
    }

    render() {
      console.log(this.state.blogs);
      const dataSource = this.state.ds.cloneWithRows(this.state.blogs);
      return (
        <ListView
            dataSource={dataSource}
            renderRow={(blogData) => this.renderBlog(blogData)}
            enableEmptySections={true}
        />
      );
    }
  }


export default BlogFeedContainer
