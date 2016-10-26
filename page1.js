import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  StyleSheet,
} from 'react-native';
import Page2 from './page2';
import Style from './style';
import NavBar from './header-nav';

let Styles =  StyleSheet.create(Style);

export default class page1 extends Component {
     constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    let page2= { component: Page2 };
    return (
      <View>  
        <NavBar title="Welcome" onRightPress={() => this.props.navigator.push(page2)} />       
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
      
    );
  }
}