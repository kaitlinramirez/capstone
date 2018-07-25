import React, { Component } from 'react';
import { View, StyleSheet, Button, Image, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Actions } from 'react-native-router-flux';

class SecondMap extends Component {
  render() {
    return (
      <View style={styles.container}>
         <Image style={{width: 65, height: 60}} source={require('my-z-spot/lotus.png')}/>
         <View style={styles.mapContainer}>
           <MapView
             initialRegion={{
               latitude: 39.7576566,
               longitude: -105.0091418,
               latitudeDelta: 0.0922,
               longitudeDelta: 0.0421,
             }}
             style={styles.map}>
             <Marker coordinate={{latitude: 39.756505, longitude: -105.005284}} title={'Commons Park'}></Marker>
             <Marker coordinate={{latitude: 39.788993, longitude: -105.015101}} title={'Zuni Park'}></Marker>
             <Marker coordinate={{latitude: 39.776283, longitude: -105.010639}} title={'Chaffee Park'}></Marker>
             <Marker coordinate={{latitude: 39.752737, longitude: -105.044077}} title={'Sloans Lake'}></Marker>
           </MapView>
           <Text style={styles.text}>Click a marker to see details</Text>
           <TouchableOpacity
             style={styles.button}
             onPress={() => Actions.AddForm({data: "Custom data3"})}>
               <Text>Add a new location</Text>
             </TouchableOpacity>
         </View>
       </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#001100',
  },
  mapContainer: {
    width: '100%',
    height: 300,
    marginTop: 15,
  },
  map: {
    width: '100%',
    height: '100%'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 10,
    marginTop: 30,
    width: 200,
  },
  text: {
    color: 'white',
    marginTop: 15,
    alignSelf: 'center',
  },
  park: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  }
})


export default SecondMap;
