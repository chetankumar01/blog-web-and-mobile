import React from 'react';
import { View, Text } from 'react-native';
import { NewBlog } from '.';
import { Header, Button, List} from '../components';

const BlogFeed = (props) => {
  function createNewBlog(){
    props.navigator.push({component: NewBlog});
  }
  const rightAction = <Button onClick={createNewBlog} />;
  let data = [{title: 'check'}, {title: 'check1'}];
  let rowComponent = (data) => {
    return <Text>{data.title}</Text>
  };
  return (
    <View>
      <Header title="Welcome" rightAction={rightAction} />
      <List data={data} rowComponent={rowComponent} />
    </View>
  );
}

BlogFeed.propTypes = {
  navigator: React.PropTypes.object
}

export default BlogFeed
