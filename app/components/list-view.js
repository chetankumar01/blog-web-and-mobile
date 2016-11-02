import React from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View
} from 'react-native';

let style = StyleSheet.create({
 text: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',  
      fontSize: 20,
      padding: 20,
      color: '#112334'
  },
})

const List = ({data, rowComponent}) => {
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let dataSource = ds.cloneWithRows(data);
  return (
    <ListView
      dataSource={dataSource}
      renderRow={(rowData) => rowComponent(rowData)}
    />
  );
}

List.propTypes = {
  data: React.PropTypes.array,
  rowComponent: React.PropTypes.func
}

export default List