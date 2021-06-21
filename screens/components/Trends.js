import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Alert, ActivityIndicator, AsyncStorage } from 'react-native';
import { WebView } from 'react-native-webview';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class Trends extends Component {

//   constructor (props) {
//     super(props)
//     this.state = {
//       email: ''   
//     };
//     //console.log('pid: ', this.state.pid); 
    
//   }
//   componentDidMount() {
//     this._bootstrapAsync();
//   }
//   _bootstrapAsync =  async() => {
//     this.userToken =await AsyncStorage.getItem('sessionid');
//     this.setState({
//       email : this.userToken
//   })
//   };

  constructor (props) {
    super(props)
    this.state = {
      email: ''   
    };
    //console.log('pid: ', this.state.pid); 
    
  }
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('sessionid');
    this.setState({
      email : userToken
  
    })
  }
  checktype = () => {
    let p=this.props.navigation.state.params.type
    if(p==0)
    return 'fastTrends'
    if(p==1)
    return 'randomTrends'
    else
    return 'cbcTrends'
  
  }
  
  render() {
    let a=this.checktype()
    const uri = 'http://instrux.live/healthapp_patient/API/trends-ai/'+ a+ '.php?email='+this.state.email;

    // const uri = 'http://instrux.live/healthapp_patient/API/trends-ai/fastTrends.php?email=' + this.state.email;
    //console.log('uri: ', uri);
    return (
     
<View style={styles.container}>
      <WebView source={{ uri: uri }} style={{ marginTop: 30 }} />
      </View>
    );
  }
}

//Use this code as it ir for displaying the trends for fasting reports

// use this uri for random test
//const uri = 'http://instrux.live/healthapp_patient/API/trends-ai/randomTrends.php?email=' + this.state.email;


//use this uri for cbc test
//const uri = 'http://instrux.live/healthapp_patient/API/trends-ai/cbcTrends.php?email=' + this.state.email;

const styles = StyleSheet.create({
  container: {
      // height:800,
      height:hp('100%'),
      // width:350,
      width:wp('100%'),
      flex: 1,
      backgroundColor: 'white',
      // alignItems: 'center',
      // justifyContent: 'center',
      
  },

});
