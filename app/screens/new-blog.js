import React from 'react'
import { View } from 'react-native'
import { Header } from '../components'
import { NewBlog } from '../containers'

const NewBlogScreen = (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Header title="Save Details" onRightPress={props.navigator.pop} />
      <NewBlog />
    </View>
  );
}

NewBlogScreen.propTypes = {
  navigator: {
    pop: React.PropTypes.func
  }
}

export default NewBlogScreen
