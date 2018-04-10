
import React from 'react';

import {
  StyleSheet, 
  View, 
  Text,
  ActivityIndicator
} from 'react-native';

const style = StyleSheet.create( {

  loadingContainer: {
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  },

  container: {
    flex: 1,
    backgroundColor: '#333',
    margin: 10,
    marginTop: 0,
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

  credit: {
    flexDirection: 'row',
    marginBottom: 5
  },

} );

export default ( props ) => {

  const { credits, loading } = props;

  if ( !credits ) return <View/>;

  const { cast, crew } = credits;

  if ( loading ) return (
    <View style={ style.loadingContainer }>
      <ActivityIndicator style={ { width: 50, height: 50 } }/>
    </View>
  );

  return (
    <View style={ style.container }>
      <Text style={ [ style.text, style.header ] }>Cast</Text>
      {
        cast.slice( 0, 5 ).map( ( castMember, i ) => {
          const { name, character } = castMember;
          return <View key={ i } style={ [ style.credit, { flexDirection: 'column' } ] }>
            <Text style={ [ style.text, { fontWeight: '200' } ] }>{ name }</Text>
            <Text style={ [ style.text, { fontWeight: '600' } ] }>{ character }</Text>
          </View>;
        } )
      }
      <Text style={ [ style.text, style.header ] }>Crew</Text>
      {
        crew.slice( 0, 5 ).map( ( crewMember, i ) => {
          const { name, job } = crewMember;
          return <View key={ i } style={ [ style.credit, { flexDirection: 'column' } ] }>
            <Text style={ [ style.text, { fontWeight: '200' } ] }>{ name }</Text>
            <Text style={ [ style.text, { fontWeight: '600' } ] }>{ job }</Text>
          </View>;
        } )
      }
    </View>
  );

};