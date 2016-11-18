import React from 'react'
import { View ,Image} from 'react-native'
import { Header, Button } from '../components'
import { NewBlogScreen } from '../screens'
import { BlogFeedDetailContainer, BlogFeedContainer} from '../containers'

const BlogFeedDetailScreen = (props) => {
    console.log(props)
 const rightAction = <Button onPress={props.navigator.pop} title="Back" />;
  return (
    <View style={{flex: 1}}>
        <Header title="Blog detail" rightAction={rightAction} />
        <BlogFeedDetailContainer  blogData = {props.blogData}/>
    </View>
  );
}

BlogFeedDetailScreen.propTypes = {
  navigator: React.PropTypes.object,
  blogData: React.PropTypes.object,
}

export default BlogFeedDetailScreen