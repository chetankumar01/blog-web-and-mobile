import React from 'react';
import { View } from 'react-native';
import { NewBlog } from '.';
import { Header, Button} from '../components';
import FeedContainer from '../containers/blog-feed';

const BlogFeed = (props) => {
  function createNewBlog() {
    props.navigator.push({component: NewBlog});
  }
  const rightAction = <Button onClick={createNewBlog} />;

  return (
    <View style={{flex: 1}}>
      <Header title="Welcome" rightAction={rightAction} />
      <FeedContainer />
    </View>
  );
}

BlogFeed.propTypes = {
  navigator: React.PropTypes.object
}

export default BlogFeed
