
import React from 'react';

import {
  StyleSheet, 
  View, 
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';

const style = StyleSheet.create( {

  container: {
    height: 50,
    backgroundColor: '#369',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 5
  },

  text: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },

} );

const generateLink = ( title ) => {
  const searchQuery = `${title} showtimes`;
  const q = searchQuery.split( ' ' ).join( '+' ).toLowerCase();
  return `http://www.google.com/search?q=${q}`;
}

export default ( props ) => {

  const { title } = props;

  const url = generateLink( title );

  return (
    <TouchableOpacity style={ style.container } onPress={ () => Linking.openURL( url ) }>
      <Text style={ style.text }>Showtimes</Text>
    </TouchableOpacity>
  );

};