import React from 'react'
import { View,Dimensions,AsyncStorage } from 'react-native'
import { TextInput, Button } from '../components'

let { width } = Dimensions.get('window');

class NewBlog extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
    }
  }
  saveBlog = () => {
    if (this.state.title === "") {
      alert('please enter title');
      return;
    }
    if (this.state.body === "") {
      alert('please enter body');
      return;
    }
    const newBlog =  { 'title': this.state.title, 'body': this.state.body };
    this.props.addBlog(newBlog)
    this.props.navigator.pop();
  }

  render(){
    console.log(this.props)
    return (
      <View>
        <TextInput
            placeholder="Name Here..."
            value={this.state.title}
            onChange={(title) => this.setState({title})}
        />
        <View style={{borderColor: 'skyblue', borderWidth: 1}}></View>
        <TextInput
            placeholder="Body Here..."
            value={this.state.body}
            onChange={(body) => this.setState({body})}
            multiline={true}
        />
        <Button title="Save" onPress={this.saveBlog} />
      </View>
    );
  }
}

export default NewBlog
