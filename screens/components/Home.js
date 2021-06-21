import React, { Component } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  BackHandler ,
  TouchableHighlight,
  AsyncStorage,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './Login';

    
export  class Home extends React.Component {
  constructor(props) {
   
    super(props)
 
    this.state = {
 
    
    
      email: '',
    
 
    };
    
  }

  componentDidMount() {
    this._bootstrapAsync();
  }

  
  _bootstrapAsync =  async() => {
    this.userToken =await AsyncStorage.getItem('sessionid');
    this.setState({
      email : this.userToken
  })

 
  };

  

render() {
   
    return (
      <View style={styles.container}>
         
          <Image style={styles.avatar} source={require('./add-plus-pngrepo-com.png')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
             
    <Text style={styles.info}>{this.state.email}</Text>
             

        

           <TouchableHighlight
           style={[styles.buttonContainer, styles.signupButton]}
           onPress={() =>
           
                this.props.navigation.navigate('MedicalRecords')
              }
           >
        
             <Text style={styles.signUpText}>Medical Records</Text>
              
           </TouchableHighlight>

          

          
           <TouchableHighlight
           style={[styles.buttonContainer, styles.signupButton]}
           onPress={() =>
           
            this.props.navigation.navigate('Symptom')
          }
            >  
            
             <Text style={styles.signUpText}>General Prescription</Text>
             
             
           </TouchableHighlight>
           
           
           <Text style={styles.footer} >Powered By Neurocomputation lab, NCAI</Text>


            </View>
          



        </View>
      </View>
    );
  }

}
export default Home;






const styles = StyleSheet.create({
  // header:{
  //   backgroundColor: "#00BFFF",
  //   // height:200,
  //   height:hp('70%'),
  //   // width:100
  //   width:100
  // },
  footer:{
    color:"#00BFFF",
  //  paddingTop: 80
  paddingTop: hp('10%')
  },
  avatar: {
    // width: 130, 
    width: wp('36%'),
    // height: 130,
    height: hp('18%'),
    // borderRadius: 63,
    borderRadius: hp('30%'),
    // borderWidth: 4,
    borderWidth: hp('1%'),
    borderColor: "white",
    // marginBottom:10,
    marginBottom:hp('5%'),
    alignSelf:'center',
    position: 'absolute',
    // marginTop:70
    marginTop:hp('10%')
  },
  // name:{
  //   // fontSize:22,
  //   fontSize:hp('20%'),
  //   color:"#FFFFFF",
  //   // fontWeight:'600',
  //   fontWeight:'600',
  // },
  body:{
    // marginTop:40,
    marginTop:hp('7%'),
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    // padding:30,
    padding:hp('4%'),
  },
  // name:{
  //   fontSize:28,
  //   color: "#696969",
  //   fontWeight: "600"
  // },
  info:{
    // fontSize:18,
    fontSize:hp('2.5%'),
   color: "#00BFFF",
    // marginTop:130
    marginTop:hp('17%')
  },
  // description:{
  //   fontSize:16,
  //   color: "#696969",
  //   marginTop:10,
  //   textAlign: 'center'
  // },
  container: {
    // height:800,
    height:hp('100%'),
   
    // paddingTop: 5,
    paddingTop: hp('1%'),
    
    backgroundColor: "#ffffff"
  },
  buttonContainer: {
    // marginTop:10,
    marginTop:hp('2%'),
    // height:120,
    height:hp('17%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom:1,
  
    // width:350,
    width:wp('90%'),
    // borderRadius:30,
    borderRadius:hp('1%'),
    backgroundColor: "#00BFFF",
  
  },
  signupButton: {
    backgroundColor: "#00b5ec",
    borderColor: "#00b5ec",
    // borderWidth: 1,
    borderWidth: wp('1%'),
    // marginTop: 30
    marginTop: hp('4.2%')
  },
  // buttonContainer: {
  //   marginTop:10,
  //   height:50,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginBottom:1,
  //   width:250,
  //   borderRadius:30,
  //   backgroundColor: "#00BFFF",
  
  // },
  // signupButton: {
  //   backgroundColor: "#00b5ec",
  //   borderColor: "#00b5ec",
  //   borderWidth: 1,
  //   marginTop: 30
  // },
  
  signUpText: {
   
    color: "#ffffff",
    // fontSize:28,
    fontSize:hp('4%'),

  }
})

