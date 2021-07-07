
import React, { Fragment, Component } from 'react';
import { Block } from 'galio-framework';
import { Card, Button } from '../../components';
// import ImagePicker from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  Alert,
  AsyncStorage,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { argonTheme } from '../../constants';

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filepath: {
        data: '',
        uri: ''
      },
      fileData: '',
      fileUri: ''
    }
  }

  // chooseImage = () => {
  //   let options = {
  //     title: 'Select Image',
  //     customButtons: [
  //       { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
  //     ],
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };
  //   ImagePicker.showImagePicker(options, (response) => {
  //     console.log('Response = ', response);

  //     if (response.didCancel) {
  //       console.log('User cancelled image picker');
  //     } else if (response.error) {
  //       console.log('ImagePicker Error: ', response.error);
  //     } else if (response.customButton) {
  //       console.log('User tapped custom button: ', response.customButton);
  //       alert(response.customButton);
  //     } else {
  //       const source = { uri: response.uri };

  //       // You can also display the image using data:
  //       // const source = { uri: 'data:image/jpeg;base64,' + response.data };
  //       // alert(JSON.stringify(response));s
  //       console.log('response', JSON.stringify(response));
  //       this.setState({
  //         filePath: response,
  //         fileData: response.data,
  //         fileUri: response.uri
  //       });
  //     }
  //   });
  // }
  checktype = () => {
    let p = this.props.navigation.state.params.type
    if (p == 0)
      return 'sugardata.php'
    if (p == 1)
      return 'sugarrandom.php'
    else
      return 'cbcscan.php'
  }


  launchCamera = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    let response = await ImagePicker.launchCameraAsync(options)
    if (response.cancelled) {
      return;
    }
    this.setState({
      filePath: response,
      fileData: response.data,
      fileUri: response.uri
    });
    const userToken = await AsyncStorage.getItem('sessionid');

    let localUri = response.uri;
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

    let a = this.checktype()
    // const uri = 'http://instrux.live/healthapp_patient/API/trends-ai/'+ a+ '.php?email='+this.state.email;

    return await fetch('http://instrux.live/healthapp_patient/API/test/' + a, {
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






  launchImageLibrary = async () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    let response = await ImagePicker.launchImageLibraryAsync(options)
    if (response.cancelled) {
      return;
    }
    this.setState({
      filePath: response,
      fileData: response.data,
      fileUri: response.uri
    });
    const userToken = await AsyncStorage.getItem('sessionid');

    let localUri = response.uri;
    let filename = localUri.split('/').pop();

    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    let formData = new FormData();
    let email = userToken;
    formData.append('photo', { uri: localUri, name: filename, type });
    formData.append("email", userToken); // number 123456 is immediately converted to a string "123456"
    //http://192.168.1.100:80/xampp/htdocs/healthapp/upload.php
    //https://allinonehapp.000webhostapp.com/API/upload.php

    // C:\xampp\htdocs\healthapp
    //  http://instrux.live/healthapp_patient/API/test/check.php


    let a = this.checktype()
    return await fetch('http://instrux.live/healthapp_patient/API/test/' + a, {
      method: 'POST',
      body: formData,
      header: {
        // 'Accept': 'application/json',
        'Content-type': 'multipart/form-data',
      },

    }).then((response) => response.text())
      .then((responseJson) => {
        Alert.alert(responseJson);

      }).catch((error) => {
        console.error(error);
      });


  }

  renderFileData() {
    if (this.state.fileData) {
      return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
        style={styles.images}
      />
    } else {
      return <Image source={require('./main2.png')}
        tintColor={argonTheme.COLORS.PRIMARY}
        style={styles.images}
      />

    }
  }

  renderFileUri() {
    if (this.state.fileUri) {
      return <Image
        source={{ uri: this.state.fileUri }}
        style={styles.images}
      />
    } else {
      return <Image
        tintColor={argonTheme.COLORS.PRIMARY}
        source={require('./main2.png')}
        style={styles.images}
      />
    }
  }
  render() {
    return (
      <Block middle style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center'}}>
        <SafeAreaView>
          <Block middle style={{marginVertical:100}}>
            <View>
              {this.renderFileUri()}
            </View>
          </Block>
          <Block middle style={styles.btnParentSection}>
            <Button color="primary" size="large" round onPress={this.chooseImage} >
              <Text bold size={14} style={{ color: "white" }}>
                Scan Report
              </Text>
            </Button>
            <Button color="primary" size="large" round onPress={this.launchImageLibrary}>
              <Text bold size={14} style={{ color: "white" }}>
                Select Report
              </Text>
            </Button>
          </Block>
        </SafeAreaView>
      </Block>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },

  body: {
    // backgroundColor: Colors.white,
    // justifyContent: 'center',
    height: hp('100%')
    // borderColor: 'black',
    // borderWidth: 1,
    // height: Dimensions.get('screen').height - 20,
    // width: Dimensions.get('screen').width
  },
  ImageSections: {
    // display: 'flex',
    // flex: 1,
    // flexDirection: 'row',
    // paddingHorizontal: 8,
    // paddingTop: hp('3%'),
    // paddingHorizontal: wp('1%'),
    // paddingVertical: 8,
    // justifyContent: 'center'
  },
  images: {
    width: 250,
    height: 250,
    borderColor: 'white',
    borderWidth: 1,
    marginHorizontal: 3

  },
  btnParentSection: {
    flex: 2,
    alignItems: 'center',
    // marginTop:10
    // height:hp('100%'),
    // backgroundColor: 'white',
    // marginTop: hp('4%')
  },
  btnSection: {
    // width: 225,
    width: wp('70%'),
    // height: 50,
    height: hp('7%'),
    backgroundColor: argonTheme.COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 3,
    borderRadius: hp('5%'),
    // marginBottom:10
    marginBottom: hp('2%')
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    // fontSize: 14,
    fontSize: hp('2.5%'),
    fontWeight: 'bold'
  }
});












