import React from 'react';
import { Asset, AppLoading, Font } from 'expo';
import { Platform, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//import { loadSavedTalksAsync } from './app/utils/storage';
import { SafeAreaView } from 'react-navigation';
import TabNavigator from './moviesapp/Navigation';

if (Platform.OS === 'android'){
  SafeAreaView.setStatusBarHeight(0);
}

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  _loadResourcesAsync = () => {
    return Promise.all([
      this._loadAssetsAsync(),
      //this._loadDataAsync(),
    ])
  }

  _loadDataAsync = () => {
    return true;
    //return loadSavedTalksAsync();
  }

  _loadAssetsAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        'open-sans-bold': require('./app/assets/OpenSans-Bold.ttf'),
        'open-sans': require('./app/assets/OpenSans-Regular.ttf'),
        'open-sans-semibold': require('./app/assets/OpenSans-SemiBold.ttf'),
        ...Ionicons.font,
      }),
      Asset.fromModule(require('./app/assets/logo.png')).downloadAsync(),
      Asset.fromModule(
        require('react-navigation/src/views/assets/back-icon.png')
      ).downloadAsync(),
    ]);
  };

  render() {
    if (!this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={console.error}
          onFinish={() => {
            this.setState({ fontLoaded: true });
          }}
        />
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <TabNavigator />
      </View>
    );
  }
}
