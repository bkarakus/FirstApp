import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});

class ExampleScreen extends React.Component {
  render() {
    return (
      <View style={ style.container }>
        <Text>Merhaba Dünyalı</Text>
      </View>
    );
  }
}

export default ExampleScreen;
