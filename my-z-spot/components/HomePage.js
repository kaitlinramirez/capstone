import React, { Component } from 'react';
import { Button, View, Image, StyleSheet, ImageBackground, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

class HomePage extends Component {
  render() {
    return (
      <ImageBackground
        source={require('my-z-spot/background.jpg')}
        style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <TouchableHighlight onPress={() => Actions.UsersMap({data: "Custom data2"})}>
            <Image
              style={{width: 350, height: 350, marginBottom: 190,}}
              source={require('my-z-spot/zen.png')}/>
          </TouchableHighlight>

          {/* <Button title="Get Started" onPress={() => Actions.UsersMap({data: "Custom data2"})}></Button> */}
        </View>
      </ImageBackground>
    )
  }
}

export default HomePage;
