
import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions
} from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

import moment from 'moment';
import Image from 'react-native-image-progress';
import Badge from './Badge';
import helpers from '../lib/helpers';

const MARGIN_LR = 10;

const style = StyleSheet.create( {

  container: {
    height: 150,
    backgroundColor: 'black',
    marginLeft: MARGIN_LR,
    marginRight: MARGIN_LR,
    marginTop: 5,
  },

  button: {
    flex: 1
  },

  image: {
    flex: 1,
    opacity: 0.5
  },

  overlay: {
    position: 'absolute',
    height: 150,
    width: screenWidth - ( MARGIN_LR * 2 ),
    padding: 10
  },

  text: {
    color: '#f9f9f9'
  },

  title: {
    flex: 2,
    fontSize: 25,
    fontWeight: '200'
  },

  detail: {
    fontSize: 10,
    fontWeight: '400'
  }

} );

// not using a stateless component because we need redux to get the config

class MovieListViewItem extends React.Component {

  render() {

    const { containerStyle, movie, onPress, showCount } = this.props; // showCount implies we're on MovieView
    const { id, title, genres, release_date, vote_average, vote_count, backdrop_path } = movie;
    const bg_image_url = helpers.generateBackdropImageURL( this.props.configuration, backdrop_path, !showCount );

    const prettyGenres = genres.map( ( g ) => g.name ).join( ', ' );
    const prettyReleaseDate = moment( release_date ).format( 'MM/DD/YYYY' );

    return (
      <TouchableOpacity
        style={ [ style.container, containerStyle ] }
        onPress={ onPress ? onPress.bind( null, movie ) : null }
        disabled={ !onPress }
      >
        <Image
          style={ style.image }
          resizeMode='cover'
          source={ { uri: bg_image_url } }
          indicator={ ActivityIndicator }
        />
        <View style={ [ style.overlay, containerStyle ] }>
          <View style={ { flexDirection: 'row' } }>
            <Text style={ [ style.text, style.title ] }>{ title }</Text>
            <View style={ { flex: 1 } } />
            {
              vote_average > 0 && <Badge vote_average={ vote_average } vote_count={vote_count} showCount={ showCount } />
            }
          </View>
          <View style={ { flex: 1 } } />
          <View style={ { flexDirection: 'row' } }>
            <Text style={ [ style.text, style.detail ] }>{ prettyGenres }</Text>
            <View style={ { flex: 1 } } />
            <Text style={ [ style.text, style.detail ] }>{ moment( release_date ).isBefore( moment() ) ? 'Released' : 'Releasing' } on { prettyReleaseDate }</Text>
          </View>
        </View>
      </TouchableOpacity>
    );

  }

}

export default MovieListViewItem;
