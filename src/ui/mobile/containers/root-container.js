import React from 'react'
import { Navigator , AsyncStorage} from 'react-native'
import  { BlogFeedScreen } from '../screens'

class Root extends React.PureComponent {
  
  addBlog(blog) {
    AsyncStorage.getItem('blogs').then( (value) => {
      let blogs = JSON.parse(value) || [];
      blogs.push(blog);
      AsyncStorage.setItem('blogs', JSON.stringify(blogs));
    });
  }

  getBlogs() {
    return AsyncStorage.getItem('blogs');
  }

  render() {
    const initialRoute = { component: BlogFeedScreen };
    return (
      <Navigator
        initialRoute={initialRoute}
        renderScene={(route, navigator) => <route.component navigator={navigator} addBlog={this.addBlog} getBlogs={this.getBlogs} {...route.passProps} /> }
      />
    );
  }
}

export default Root;
