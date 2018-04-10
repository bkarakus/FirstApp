
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import API from '../lib/api';

import moment from 'moment';

import MovieListViewItem from '../components/MovieListViewItem';
import Overview from '../components/Overview';
import Credits from '../components/Credits';
import ShowtimesButton from '../components/ShowtimesButton';
import helpers from '../lib/helpers';

const style = StyleSheet.create( {

  container: {
    flex: 1,
    backgroundColor: '#222'
  },

  header: {
    height: 300
  }

} );

class MovieViewScreen extends React.Component {

  constructor( props ) {

    super( props );

    this.state = {
      loadingCredits: false,
      credits: null
    };

  }

  componentDidMount() {

    this.setState( { loadingCredits: true } );

    const { id } = this.props.navigation.state.params.movie;

    API.getMovieCredits( id )
    .then( ( credits ) => {
      this.setState( { credits } );
    } )
    .finally( () => {
      this.setState( { loadingCredits: false } );
    } )
    ;

  }

  render() {

    // use props value (not navigation) so it updates via redux
    const { id } = this.props.navigation.state.params.movie;
    const movie = this.props.movies.find( ( m ) => m.id === id );

    const { title, overview, genres, release_date, vote_average, vote_count, backdrop_path } = movie;
    const bg_image_url = helpers.generateBackdropImageURL( this.props.configuration, backdrop_path );

    const prettyGenres = genres.map( ( g ) => g.name ).join( ', ' );
    const prettyReleaseDate = moment( release_date ).format( 'MM/DD/YYYY' );

    return (
      <ScrollView style={ style.container }>
        <MovieListViewItem
          containerStyle={ style.header }
          movie={ movie }
          showCount={ true }
        />
        <ShowtimesButton title={ movie.title } />
        <Overview overview={ overview } />
        <Credits credits={ this.state.credits } loading={ this.state.loadingCredits } />
      </ScrollView>
    );
  }

}

export default MovieViewScreen;
