import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Alert, ActivityIndicator, AsyncStorage } from 'react-native';
import * as Permissions from 'expo-permissions';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as ImagePicker from 'expo-image-picker';

// export default class QRcode extends React.Component {
  
//   constructor(props) {
//     super(props)
//     this.state = {
//         image: './camera.png',
//         email:'',
//     }
// }
// componentDidMount(){
//   this.takePicture();
// }

  


//   takePicture = async () => {
//     await Permissions.askAsync(Permissions.CAMERA);
//     let result = await ImagePicker.launchCameraAsync({
//       allowsEditing: false, // higher res on iOS
//       aspect: [4, 3],
//     });
  
//     if (result.cancelled) {
//       return;
//     }
//     const userToken =await AsyncStorage.getItem('sessionid');
    
//     let localUri = result.uri;
//     let filename = localUri.split('/').pop();
  
//     let match = /\.(\w+)$/.exec(filename);
//     let type = match ? `image/${match[1]}` : `image`;
  
//     let formData = new FormData();
//   let email = userToken;
//    formData.append('photo', { uri: localUri, name: filename, type });
//    formData.append("email", userToken); // number 123456 is immediately converted to a string "123456"
//    //http://192.168.1.100:80/xampp/htdocs/healthapp/upload.php
//   //https://allinonehapp.000webhostapp.com/API/upload.php

//  // C:\xampp\htdocs\healthapp
// //  http://instrux.live/healthapp_patient/API/test/check.php
//      return await fetch('https://allinonehapp.000webhostapp.com/API/imagestore.php', {
//       method: 'POST',
//       body: formData,
//       header: {
//         // 'Accept': 'application/json',
//         'Content-type': 'multipart/form-data',
//       },
     
//     }).then((response) => response.text())
//             .then((responseJson) => {
       
//       // Showing response message coming from server after inserting records.
//               Alert.alert(responseJson);
       
//             }).catch((error) => {
//               console.error(error);
//     });
//   }

    

//   render() {
//     return (
//       <View style={styles.container}>
//         <Image style={styles.image} source={require('./camera.png')} />
//         {/* <Image style={styles.image} source={{ uri: this.state.image }} /> */}
//         <View style={styles.row}>
          
//           <Button  onPress={this.takePicture}>Camera</Button>
//           {/* <ActivityIndicator size="large" color="#0000ff" /> */}
//         </View>
//       </View>
//     );
//   }
// }

// const Button = ({ onPress, children }) => (
//   <TouchableOpacity style={styles.button} onPress={onPress}>
//     <Text style={styles.text}>{children}</Text>
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 21,
//   },
//   row: { flexDirection: 'row' },
//   image: { width: 300, height: 300, backgroundColor: 'gray' },
//   button: {
//     padding: 13,
//     margin: 15,
//     backgroundColor: '#ffffff',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import QRCode from 'react-native-qrcode';
import QRCode from 'react-native-qrcode-svg';

export default class QRcode  extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {
      patient_id:'',
             p_name: '',
            address: '',
            contact_no: '',
            email: '',
            id:''
    };
    //console.log('pid: ', this.state.pid); 
    
  }
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('sessionid');
    
   
fetch('http://instrux.live/healthapp_patient/API/new/profile.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    
    body: JSON.stringify({
  
      // Getting the id.
      email: userToken
   
    })
    
  }).then((response) => response.json())
        .then((responseJson) => {

          this.setState({
            patient_id: responseJson[0].patient_id,
            p_name : responseJson[0].p_name,
            address : responseJson[0].address,
            contact_no : responseJson[0].contact_no,
            email : responseJson[0].email
        
          })
        
        }).catch((error) => {
          console.error(error);
        });
   
      }

  checktype = () => {
    let p=this.props.navigation.state.params.type
    if(p==0)
    return 'fastreports'
    if(p==1)
    return 'randomreports'
    else
    return 'cbcreports'
    // const userToken = await AsyncStorage.getItem('sessionid');
    // if (this.state.report)
  }


  render() {
    // let p=this.props.navigation.state.params.type
    let a=this.checktype()
    const uri = 'http://instrux.live/healthapp_patient/API/trends-ai/uploads/generatedpdfs/'+ a+ this.state.patient_id;
    return (
      // <View style={styles.container}>
         
      //     <Image style={styles.avatar} source={require('./add-plus-pngrepo-com.png')}/>
      //     </View>

      <View style={styles.container}>
        {/* http://instrux.live/healthapp_patient/API/test/images/about1.jpg */}
         {/* <Text style={styles.TextStyle}>
        
          {this.state.patient_id}
        </Text> */}
        <QRCode
        // value="123"
          value={uri}
          size={300}
          // bgColor='black'
          // fgColor='white'
          />
          <Text style={styles.input}> Scan QR Code </Text>
       </View>
    );
  };
}
 
const styles = StyleSheet.create({
    container: {
        // height:800,
        height:hp('100%'),
        // width:350,
        width:wp('100%'),
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
 
    input: {
      // fontSize: 30,
      fontSize: hp('5%'),
      // padding:30
      padding:hp('7%')
    }
});