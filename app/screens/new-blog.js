import React from 'react'
import { View } from 'react-native'
import { Header } from '../components'
import { NewBlog } from '../containers'

export default (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Header title="Save Details" onRightPress={props.navigator.pop} />
      <NewBlog />
    </View>
  );
}
