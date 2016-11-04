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
    //do something here
    let self = this;
    if (this.state.title === "") {
        alert('please enter title')
        return;
    }
    if (this.state.body === "") {
       alert('please enter body')
       return;
    }
    var tmp_array =  { 'title': this.state.title, 'body': this.state.body };
    AsyncStorage.getItem('blogs').then(function (value){
      let blogs = JSON.parse(value) || []; 
      blogs.push(tmp_array)
      AsyncStorage.setItem('blogs', JSON.stringify(blogs));
      self.props.navigator.pop();
    });
  }
  
  render(){
    return (
      <View>
        <TextInput
          placeholder="    Name Here..."
          value={this.state.title}
          onChange={(title) => this.setState({title})}
        />
        <TextInput
          placeholder="    Body Here..."
          value={this.state.body}
          onChange={(body) => this.setState({body})}
        />
        <Button text="Save Blog" onClick={this.saveBlog} style={{width: width - 20, height: 40}} />
      </View>
    );
  }
}

export default NewBlog
