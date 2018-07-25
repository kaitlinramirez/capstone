import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TextInput, Button, TouchableOpacity, TouchableHighlight, ScrollView, AppRegistry, ImagePickerIOS, CameraRoll } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RNS3 } from 'react-native-aws3';



class AddForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
      photos: [],
      index: null
    }
  }

  addLocation = (event) => {
    event.preventDefault()
      fetch(('https://myzspot.herokuapp.com/'), {
        method: "POST",
        headers: new Headers({"content-type": "application/json"}),
        body: JSON.stringify({
          name: this.state.name,
          lat: this.state.lat,
          long: this.state.long,
          photo: this.state.photo,
          description: this.state.description
        })
      })
    console.log(this.state);
  }

  takePic = () => {
    CameraRoll.getPhotos({
       first: 5,
       assetType: 'Photos',
     })
     .then(r => {
       this.setState({ photos: r.edges });
     })
     .catch((err) => {
        console.log(err)
     })
   }

   toggleModal = () => {
      this.setState({ modalVisible: !this.state.modalVisible });
    }

   setIndex = (index) => {
      if (index === this.state.index) {
        index = null
      }
      this.setState({ index })
    }

  render(props) {
    return (
      <ScrollView style={styles.background}>
      <View style={styles.container}>
        <Image style={{width: 65, height: 60}} source={require('my-z-spot/lotus.png')}/>
        <Text style={styles.new}>Add a new location</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput}
            onChangeText={(name) => this.setState({name})}
            placeholder="Name"
            // value={this.props.name}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput}
            onChangeText={(lat) => this.setState({lat})}
            placeholder="Latitude"
            // value={this.props.lat}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput}
            onChangeText={(long) => this.setState({long})}
            placeholder="Longitude"
            // value={this.props.long}
          />
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.photo}
            onPress={() => { this.toggleModal(); this.takePic() }}>
            <Text>Add A Photo</Text>
          </TouchableOpacity>
          <ScrollView>
            {
               this.state.photos.map((p, i) => {
                 return (
                   <TouchableHighlight
                     style={{opacity: i === this.state.index ? 0.5 : 1}}
                     key={i}
                     underlayColor='transparent'
                     onPress={() => this.setIndex(i)}
                   >
                     <Image
                       style={{
                         width: 300,
                         height: 100,
                         margin: 10,
                       }}
                       source={{uri: p.node.image.uri}}
                     />
                   </TouchableHighlight>
                 )
               })
             }
           </ScrollView>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput}
            onChangeText={(description) => this.setState({description})}
            placeholder="Description"
            // value={this.props.description}
          />
        </View>
        {/* <Button
          onPress={this.addLocation}
          margin='10'
          title="Submit"
        /> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => Actions.SecondMap({data: "Custom data4"})}
          margin='10'>
          <Text>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#001100',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: "60%",
    padding: 10
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
    width: "99%",
    textAlign: "center"
  },
  new: {
    margin: 10,
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 10,
    marginTop: 30,
    marginBottom: 15,
    width: 150,
  },
  photo: {
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 10,
    width: 150,
  }
});


export default AddForm;
