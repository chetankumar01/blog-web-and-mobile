import React from 'react'
import { View } from 'react-native'
import { Header, Button } from '../components'
import { NewBlogScreen } from '../screens'
import { BlogFeedContainer } from '../containers'

const BlogFeed = (props) => {
  
  function createNewBlog() {
    props.navigator.push({component: NewBlogScreen});
  }
  
  const rightAction = <Button title="New Blog" onPress={createNewBlog} />

  return (
    <View style={{flex: 1}}>
      <Header title="Blog Feed" rightAction={rightAction} />
      <BlogFeedContainer />
    </View>
  );
}

BlogFeed.propTypes = {
  navigator: React.PropTypes.object
}

export default BlogFeed
