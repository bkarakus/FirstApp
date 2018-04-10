
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  RefreshControl,
  Alert
} from 'react-native';

import InfiniteScrollView from 'react-native-infinite-scroll-view';

import LoadingView from '../components/LoadingView';
import MovieListViewItem from '../components/MovieListViewItem';

const style = StyleSheet.create( {

  container: {
    flex: 1,
    backgroundColor: '#222'
  }

} );

class MoviesListViewScreen extends React.Component {

  constructor( props ) {

    super( props );

    this.state = {
      dataSource: new ListView.DataSource( {
        rowHasChanged: this._rowHasChanged.bind( this ),
      } ),
    };

    // Update the data store with initial data.
    this.state.dataSource = this._getUpdatedDataSource( props );

    this._loadMoreMovies();

  }

  goToMovie( movie ) {
    this.props.navigation.navigate( 'MovieView', { movie } );
    this.props.addMovieToHistory( movie )
    .then( () => {
      return this.props.saveHistory( this.props.history );
    } )
    ;
  }

  // -- ListView

  componentWillReceiveProps( nextProps ) {
    // Trigger a re-render when receiving new props (when redux has more data).
    this.setState( {
      dataSource: this._getUpdatedDataSource( nextProps ),
    } );
  }

  _getUpdatedDataSource( props ) {
    // See the ListView.DataSource documentation for more information on
    // how to properly structure your data depending on your use case.
    let rows = props.movies;
    let ids = rows.map( ( m, i ) => i );
    return this.state.dataSource.cloneWithRows( rows, ids );
  }

  _rowHasChanged( r1, r2 ) {
    return r1.id !== r2.id;
  }

  _renderRefreshControl() {
    // Reload all data
    return (
      <RefreshControl
        refreshing={ this.props.loadingMovies }
        onRefresh={ this._loadMoreMovies.bind( this ) }
      />
    );
  }

  _loadMoreMovies () {

    return this.props.setLoadingMovies( true )
    .then( () => {
      return this.props.loadPopularMovies( this.props.nextMoviesPageToLoad, this.props.genres );
    } )
    .then( () => {
      return this.props.setNextMoviesPageToLoad( this.props.nextMoviesPageToLoad + 1 );
    } )
    .catch( ( err ) => {
      console.log( 'err: ', err );
      Alert.alert( 'Error', 'Could not load movies.' );
    } )
    .finally( () => {
      return this.props.setLoadingMovies( false );
    } )
    ;

  }

  render() {

    return (
      <ListView
        style={ style.container }
        renderScrollComponent={ ( props ) => <InfiniteScrollView { ...props } />}
        dataSource={ this.state.dataSource }
        renderRow={ ( movie ) => {
          return <MovieListViewItem
            key={ movie.id }
            movie={ movie }
            onPress={ this.goToMovie.bind( this ) }
          />;
        } }
        refreshControl={this._renderRefreshControl()}
        canLoadMore={ !this.props.loadingMovies }
        onLoadMoreAsync={ this._loadMoreMovies.bind( this ) }
      />
    );

  }

}

export default MoviesListViewScreen;
