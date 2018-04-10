
import React from 'react';

import {
  StyleSheet, 
  View, 
  ActivityIndicator
} from 'react-native';

const style = StyleSheet.create( {

  container: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center'
  },

  indicator: {
    width: 50,
    height: 50
  }

} );

export default ( props ) => {

  return (
    <View style={ style.container }>
      <ActivityIndicator style={ style.indicator }/>
    </View>
  );

};