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

import { connect } from 'react-redux'

import { FeedActions } from '../../../state/actions'


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

class BlogFeedContainer extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  }

  componentWillMount() {
    //this.getBlogs();
  }

  blogDetail(selectedBlogData){
    this.props.onBlogPress ? this.props.onBlogPress(selectedBlogData) : {};
  }


  renderBlog = (blogData, sectionId, rowId) => {
    console.log(rowId, sectionId);
    return (
      <TouchableOpacity onPress={() => this.blogDetail(rowId)} style={Styles.blogItem}>
        <Text style={Styles.titleText}>{blogData.title}</Text>
        <Text style={Styles.bodyText}>{blogData.body}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    console.log(this.props);
    const dataSource = this.state.ds.cloneWithRows(this.props.blogs);
    return (
      <ListView
          dataSource={dataSource}
          renderRow={this.renderBlog}
          enableEmptySections={true}
      />
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    blogs: state.Feed.feedItems
  }
}

export default connect(mapStateToProps, {...FeedActions})(BlogFeedContainer);
