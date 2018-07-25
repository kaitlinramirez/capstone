import React from 'react';
import { Button, View, Image, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const LocationMarker = props => {
  return (
    <View style={styles.container}>
      <Image style={{width: 60, height: 60}} source={require('my-z-spot/greenlotus.png')}/>
      <Text style={styles.title}>Commons Park</Text>
      <Image style={{width: '100%', height: '60%'}} source={require('my-z-spot/park.jpg')}/>
      <Text style={styles.desc}>Lots of space to practice outdoors and occasionally free guided sessions! Usually a pretty quiet place with lots of room to spread out and find your zen.</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#001100',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 15,
  },
  desc: {
    color: '#001100',
    margin: 15,
  }
});

export default LocationMarker;
