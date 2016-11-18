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
      this.getBlogs();
    }

    componentWillReceiveProps() {
      this.getBlogs();
    }

    getBlogs() {
      let self = this;
      this.props.getBlogs().then(function(data) {
        self.setState({
          blogs: JSON.parse(data)
        });
      });
    }

    blogDetail(selectedBlogData){
       this.props.onBlogPress ? this.props.onBlogPress(selectedBlogData) : {}; 
    }


    renderBlog = (blogData) => {
      return (
        <TouchableOpacity onPress={() => this.blogDetail(blogData)} style={Styles.blogItem}>
          <Text style={Styles.titleText}>{blogData.title}</Text>
          <Text style={Styles.bodyText}>{blogData.body}</Text>
        </TouchableOpacity>
      );
    }

    render() {
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
