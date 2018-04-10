import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import ExampleScreen from './screens/ExampleScreen';

export default TabNavigator({
  ExampleScreen: { screen: ExampleScreen },
});
