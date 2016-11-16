import React from 'react'
import { View } from 'react-native'
import { Header, Button } from '../components'
import { NewBlogContainer } from '../containers'

const NewBlogScreen = (props) => {
  const rightAction = <Button onPress={props.navigator.pop} title="Back" />;
  return (
    <View>
      <Header title="Save Details" rightAction={rightAction} />
      <NewBlogContainer navigator={props.navigator} />
    </View>
  );
}

NewBlogScreen.propTypes = {
  navigator: React.PropTypes.object
}

export default NewBlogScreen
