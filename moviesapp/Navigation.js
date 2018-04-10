import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import ExampleScreen from './screens/ExampleScreen';

export default TabNavigator({
  Example: { screen: ExampleScreen },
});
