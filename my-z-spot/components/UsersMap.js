import React, { Component } from 'react';
import { View, StyleSheet, Button, Image, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Actions } from 'react-native-router-flux';

class UsersMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  getPlaces = () => {
    fetch('https://myzspot.herokuapp.com/')
      .then(res => res.json())
      .then(locations => {
        this.setState({
          locations: locations,
          loaded: true
        })
        console.log(this.state.locations.locations)
      })
      .catch(err => console.log(err))
  }

  componentWillMount(){
      this.getPlaces()
  }

 //  markerClick(){
 //      console.log("Marker was clicked");
 // }

  render() {
    return (
      <View style={styles.container}>
         <Image style={{width: 65, height: 60, marginTop: 20,}} source={require('my-z-spot/lotus.png')}/>
         <View style={styles.mapContainer}>
           <MapView
             initialRegion={{
               latitude: 39.7576566,
               longitude: -105.0091418,
               latitudeDelta: 0.0922,
               longitudeDelta: 0.0421,
             }}
             style={styles.map}>
             {this.state.loaded &&
             this.state.locations.locations.map(marker => {
               console.log({latitude: +marker.lat, longitude: +marker.long})
               return (
                <Marker
                  coordinate={{latitude: +marker.lat, longitude: +marker.long}}
                  title={marker.name}
                  key={marker.id}>
                  <MapView.Callout tooltip style={styles.customView}>
                    <TouchableHighlight onPress= {()=>this.markerClick()} underlayColor='#dddddd'>
                        <View style={styles.calloutText}>
                            <TouchableOpacity style={styles.park} onPress={() => Actions.LocationMarker({data: "Custom data5"})}>
                              <Text>Commons Park</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableHighlight>
                  </MapView.Callout>
                </Marker>
              )

             })}
           </MapView>
           <Text style={styles.text}>Click a marker to see details!</Text>
           <TouchableOpacity
             style={styles.button}
             onPress={() => Actions.AddForm({data: "Custom data3"})}>
               <Text>Add a new location</Text>
             </TouchableOpacity>
           {/* <Image style={{width: 60, height: 60}} source={this.state.locations.locations[0].photo}/> */}
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


export default UsersMap;
