import React from 'react';
import { StyleSheet, Text, View, CameraRoll } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';


// aws3 stuff ???



import UsersMap from './components/UsersMap';
import HomePage from './components/HomePage';
import AddForm from './components/AddForm';
import SecondMap from './components/SecondMap';
import LocationMarker from './components/LocationMarker';



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userLocation: null,
      locations: [],
      id:'',
      name: '',
      lat: '',
      long: '',
      photo: '',
      description: ''
    }
  }

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={HomePage}/>
          <Scene key="UsersMap" component={UsersMap} locations={this.state.locations} getPlacesHandler={this.getPlacesHandler}/>
          <Scene key="AddForm" component={AddForm} addLocation={this.addLocation}/>
          <Scene key="SecondMap" component={SecondMap}/>
          <Scene key="LocationMarker" component={LocationMarker}/>
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002B00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
