import React from 'react';
import { StyleSheet, Text, FlatList, ActivityIndicator, View, Image } from 'react-native';
import { List, ListItem, SearchBar, Avatar } from "react-native-elements";
import { StackNavigator } from 'react-navigation';
import API from './lib/api';

export default class MovieListScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
    }
  }

  componentDidMount(){
    this.fetchDataFromApi();
  }

  fetchDataFromApi = () =>{
    this.setState({ loading: true });
    
  }
}
