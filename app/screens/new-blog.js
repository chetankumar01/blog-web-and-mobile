import React from 'react'
import { View } from 'react-native'
import { Header, Button } from '../components'
import { NewBlog } from '../containers'

const NewBlogScreen = (props) => {
  const rightAction = <Button onClick={props.navigator.pop} />;
  return (
    <View>
      <Header title="Save Details" rightAction={rightAction} />
      <NewBlog navigator={props.navigator} />
    </View>
  );
}

NewBlogScreen.propTypes = {
  navigator: React.PropTypes.object
}

export default NewBlogScreen
