import React from 'react';
import { Image } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from 'native-base';
import { StackNavigator } from 'react-navigation';

class ImageScreen extends React.Component {
  static navigationOptions = {
    title: 'Image',
  };
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress = {()=>navigate('DrawerOpen')}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Welcome</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Content Section
          </Text>
          <Image
            source={{
              uri: 'https://facebook.github.io/react/logo-og.png',
              method: 'POST',
              headers: {
                Pragma: 'no-cache',
              },
              body: 'Your Body goes here',
            }}
            style={{width: 400, height: 400}}
          />
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default ImageScreen;
