import React from 'react';
import {
  DrawerNavigator,
} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ImageScreen from './screens/ImageScreen';
import { Font, AppLoading } from 'expo'; //to include font from expo.;
import { Root } from 'native-base';

const RootStack = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
    ImageDetail: {
      screen: ImageScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if (!this.state.fontLoaded){
      return(
        <Root>
          <AppLoading />
        </Root>
      )
    }
    return (
      <Root>
        <RootStack />
      </Root>
    );
  }
}
