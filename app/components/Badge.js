
import React from 'react';

import {
  StyleSheet, 
  View,
  Text,
} from 'react-native';

const formatNumber = require( 'format-number' );

const style = StyleSheet.create( {

  container: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    color: '#f9f9f9'
  },

  badge: {
    flex: 0,
    width: 50,
    height: 50,
    padding: 5,
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7
  },

  rating: {
    fontSize: 25,
    fontWeight: '800',
  },

  count: {
    fontSize: 14,
    color: '#eee',
    marginTop: 10
  }

} );

export default ( props ) => {

  const { vote_average, vote_count, showCount } = props;

  const badgeColor =  vote_average > 7.5 ? '#060' :
                      vote_average > 6 ? '#f1592a' :
                      '#f00'
                      ;

  const prettyCount = formatNumber( { noUnits: true } )( vote_count );

  return (
    <View style={ style.container }>
      <View style={ [ style.badge, { backgroundColor: badgeColor } ] }>
        <Text style={ [ style.text, style.rating ] }>{ vote_average }</Text>
      </View>
      {
        showCount && <Text style={ style.count }>{ prettyCount } votes</Text>
      }
    </View>
  );

};