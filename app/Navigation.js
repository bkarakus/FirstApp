import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import ExampleScreen from './screens/ExampleScreen';
import MoviesListViewScreen from './screens/MoviesListViewScreen';
import MovieViewScreen from './screens/MovieViewScreen';

import LoadingView from './components/LoadingView';

const MoviesStack = StackNavigator({
  MoviesListView: {
    screen: MoviesListViewScreen,
    navitationOptions: ( {navigation} ) => ( { title: 'Popular Movies' })
  },

  MovieView: {
    screen: MovieViewScreen,
    navigationOptions: ( {navigation} ) => {
      const { title } = navigation.state.params.movie;
      return { title };
    }
  }
});

class MoviesTab extends React.Component{
  render(){
    return (
      <MoviesStack />
    );
  }
}

export default TabNavigator({
  Movies: { screen: MoviesTab },
  Example: { screen: ExampleScreen },
});
