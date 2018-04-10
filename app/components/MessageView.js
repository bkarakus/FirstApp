
import React from 'react';

import {
  StyleSheet, 
  View, 
  Text
} from 'react-native';

const style = StyleSheet.create( {

  container: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    color: 'white'
  }

} );

export default ( props ) => {

  return (
    <View style={ style.container }>
      <Text style={  style.text }>{ props.message }</Text>
    </View>
  );

};