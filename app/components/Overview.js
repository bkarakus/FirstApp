
import React from 'react';

import {
  StyleSheet, 
  View, 
  Text
} from 'react-native';

const style = StyleSheet.create( {

  container: {
    flex: 1,
    backgroundColor: '#333',
    margin: 10,
    padding: 10
  },

  text: {
    color: 'white',
    fontWeight: '200'
  },

  header: {
    fontSize: 25,
    marginBottom: 10
  },

} );

export default ( props ) => {

  const { overview } = props;

  return (
    <View style={ style.container }>
      <Text style={ [ style.text, style.header ] }>Overview</Text>
      <Text style={ style.text }>{ overview }</Text>
    </View>
  );

};