import React from 'react'
import { View,AsyncStorage,StyleSheet,Text,Dimensions} from 'react-native'
import { List } from '../components'

var { width } = Dimensions.get('window');

class Blog extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    let self = this;
    AsyncStorage.getItem('blogs').then(function(data) {
    let dataArray = JSON.parse(data);
    console.log(dataArray)
        self.setState({
            data: dataArray
        })
    });
   }

   rowComponent(data) {
    return (
      <View style={Styles.viewBorder}>
        <Text style={Styles.titleText}>{data.title}</Text>
        <Text style={Styles.bodyText}>{data.body}</Text>
      </View>
    );
   }

   render() {
    return (
      <List data={this.state.data} rowComponent={(data) => this.rowComponent(data)} />
    );
  }
}
   
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
        width: width - 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    }
})  

export default Blog