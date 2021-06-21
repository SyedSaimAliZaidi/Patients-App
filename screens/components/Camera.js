import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Alert, ActivityIndicator, AsyncStorage } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

export default class Camera extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
        image: './camera.png',
        email:'',
    }
}
componentDidMount(){
  this.takePicture();
}

  


  takePicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false, // higher res on iOS
      aspect: [4, 3],
    });
  
    if (result.cancelled) {
      return;
    }
    const userToken =await AsyncStorage.getItem('sessionid');
    
    let localUri = result.uri;
    let filename = localUri.split('/').pop();
  
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
  
    let formData = new FormData();
  let email = userToken;
   formData.append('photo', { uri: localUri, name: filename, type });
   formData.append("email", userToken); // number 123456 is immediately converted to a string "123456"
   //http://192.168.1.100:80/xampp/htdocs/healthapp/upload.php
  //https://allinonehapp.000webhostapp.com/API/upload.php
  // https://allinonehapp.000webhostapp.com/API/imagestore.php
 // C:\xampp\htdocs\healthapp
//  http://instrux.live/healthapp_patient/API/test/check.php
     return await fetch('http://instrux.live/healthapp_patient/API/test/check.php', {
      method: 'POST',
      body: formData,
      header: {
        // 'Accept': 'application/json',
        'Content-type': 'multipart/form-data',
      },
     
    }).then((response) => response.text())
            .then((responseJson) => {
       
      // Showing response message coming from server after inserting records.
              Alert.alert(responseJson);
       
            }).catch((error) => {
              console.error(error);
    });
  }

    

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('./camera.png')} />
        {/* <Image style={styles.image} source={{ uri: this.state.image }} /> */}
        <View style={styles.row}>
          
          <Button  onPress={this.takePicture}>Camera</Button>
          {/* <ActivityIndicator size="large" color="#0000ff" /> */}
        </View>
      </View>
    );
  }
}

const Button = ({ onPress, children }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 21,
  },
  row: { flexDirection: 'row' },
  image: { width: 300, height: 300, backgroundColor: 'gray' },
  button: {
    padding: 13,
    margin: 15,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});