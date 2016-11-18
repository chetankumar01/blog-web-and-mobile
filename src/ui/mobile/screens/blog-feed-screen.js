import React from 'react'
import { View } from 'react-native'
import { Header, Button } from '../components'
import { NewBlogScreen, BlogFeedDetailScreen } from '../screens'
import { BlogFeedContainer } from '../containers'

const BlogFeed = (props) => {
  
  function createNewBlog() {
    props.navigator.push({component: NewBlogScreen});
  }
   
  function blogDetails(selectedBlogData) {
    props.navigator.push({
      component: BlogFeedDetailScreen,
      passProps: {
        blogData: selectedBlogData
      }
    });
  }
  
  const rightAction = <Button title="New Blog" onPress={createNewBlog} wrapperStyle={{backgroundColor: 'skyblue'}} />

  return (
    <View style={{flex: 1}}>
      <Header title="Blog Feed" rightAction={rightAction} />
      <BlogFeedContainer getBlogs={props.getBlogs} onBlogPress = {blogDetails} />
    </View>
  );
}

BlogFeed.propTypes = {
  navigator: React.PropTypes.object,
  getBlogs: React.PropTypes.func
}

export default BlogFeed
