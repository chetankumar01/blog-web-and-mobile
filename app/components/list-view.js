import React from 'react';
import {
  StyleSheet,
  ListView,
} from 'react-native';

const List = ({data, rowComponent}) => {
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
let dataSource = ds.cloneWithRows(data);
  return (
    <ListView
      enableEmptySections
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