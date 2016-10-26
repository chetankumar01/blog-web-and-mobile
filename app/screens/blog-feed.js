import React from 'react';
import { View } from 'react-native';
import { NewBlog } from '.';
import { Header } from '../components';

export default (props) => {
  function createNewBlog(){
    props.navigator.push({component: NewBlog});
  }
  return (
    <View>
      <Header title="Welcome" onRightPress={createNewBlog} />
    </View>
  );
}
