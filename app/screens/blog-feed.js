import React from 'react';
import { View, Text, AsyncStorage,StyleSheet } from 'react-native';
import { NewBlog } from '.';
import { Header, Button, List} from '../components';

const BlogFeed = (props) => {
  function createNewBlog(){
    props.navigator.push({component: NewBlog});
  }
  const rightAction = <Button onClick={createNewBlog} />;
  let dataArray = [];
   AsyncStorage.getItem('blogs').then((error, blogData) => {
      if(!error){
       // this.setState({'store': configureStore(JSON.parse(blogData)) })// eslint-disable-line
      }
      dataArray = blogData;
      console.log("arry details",dataArray)
    });
    let Styles = StyleSheet.create({
      titleText: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',  
          fontSize: 20,
          fontWeight: 'bold',
          padding : 20,
      },
       bodyText: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',  
          fontSize: 20,
          fontWeight: 'normal',
          padding : 20,
      },
      viewBorder: {
          backgroundColor : '#556677',
          height: 100,
          margin: 10,
          borderRadius: 5,
          borderWidth: 1,
          right : 0,
          top: 10, 
          width: 400,
          alignItems: 'flex-start',
          justifyContent: 'flex-start'
      }
    })
  //let data = [{title:'azmal',body:'k kjdsbcjkdsb jsdbsdb jsdbds'},{title: 'liftoff',body :'k kjdsbcjkdsb jsdbsdb jsdbds'} ,{title: 'happy'} ,{title: 'diwali',body: 'k kjdsbcjkdsb jsdbsdb jsdbds'}]
  let rowComponent = (data) => {
    return (
      <View style={Styles.viewBorder}>
        <Text style={Styles.titleText}>{data.title}</Text>
        <Text style={Styles.bodyText}>{data.body}</Text>
      </View>
    );
};
  return (
    <View>
      <Header title="Welcome" rightAction={rightAction} />
      <List data={dataArray} rowComponent={rowComponent} />
    </View>
  );
}

BlogFeed.propTypes = {
  navigator: React.PropTypes.object
}

export default BlogFeed
