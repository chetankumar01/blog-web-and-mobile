import React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { NewBlog } from '.';
import { Header, Button, List} from '../components';

const BlogFeed = (props) => {
  function createNewBlog(){
    props.navigator.push({component: NewBlog});
  }
  const rightAction = <Button onClick={createNewBlog} />;
  let data1 =  AsyncStorage.getItem('blogs')
  AsyncStorage.getItem('blogs', (error, blogData) => {
      if(!error){
        console.log(blogData)
       // this.setState({'store': configureStore(JSON.parse(blogData)) })// eslint-disable-line
      }
    });
  let data = [{title :'azmal',body :'k kjdsbcjkdsb jsdbsdb jsdbds'},{title: 'liftoff',body :'k kjdsbcjkdsb jsdbsdb jsdbds'} ,{title: 'happy'} ,{title: 'diwali',body: 'k kjdsbcjkdsb jsdbsdb jsdbds'}]
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
