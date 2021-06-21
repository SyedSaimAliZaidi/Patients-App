import React from 'react';
import { Icon } from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
 BackHandler,
  TouchableHighlight,
 
  Alert,
  KeyboardAvoidingView
} from "react-native";


export  class ForgetPassword extends React.Component {
 
  constructor(props) {
   
      super(props)
   
      this.state = {
   
      
      
        email: '',
      
   
      };
   
    }
 ChangePass = () =>{
      
  

   const { email }  = this.state ;
 
  
   

   
  fetch('http://instrux.live/healthapp_patient/API/new/newforgetpass.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
   
     
      
      email: email,
      

   
    
   
    })
   
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
      
          <  KeyboardAvoidingView
            style={styles.container} 
            behavior="padding"  enabled
           
          > 
            <Text style={{ fontWeight: "bold", fontSize: 40, color: "#00b5ec" }}>
              Forgot Password
            </Text>
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
              <Icon name="envelope" type="font-awesome" color="#00b5ec" />
                <TextInput
                  style={styles.inputs}
                  placeholder="Email"
                  keyboardType="email-address"
                  underlineColorAndroid="transparent"
                  onChangeText={email => this.setState({ email })}
                 
                />
              </View>
            
    
          
             
              <TouchableHighlight
                underlayColor="#00b5ec"
                style={[styles.buttonContainer, styles.signupButton]}
                onPress={this.ChangePass}
              >
                <Text style={styles.signUpText}>Send Email</Text>
              </TouchableHighlight>
              <Text>{"\n\n\n\n\n\n\n\n\n"}</Text>

              
             </View>
            
           
          </  KeyboardAvoidingView>
         
          
        );
      }

    
    }
   
    export default ForgetPassword;

    const styles = StyleSheet.create({
      responseText: {
        color: "rgb(255,0,0)",
        fontSize: 15
      },
      color: {
        color: "#00b5ec"
      },
      container: {
        // paddingTop: 10,
        paddingTop: hp('6%'),
        // height:750,
        height:hp('100%'),
        // flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff"
      },
      formContainer: {
        // marginTop: 70
        marginTop: hp('15%')
      },
      inputContainer: {
        borderBottomColor: "#00b5ec",
        backgroundColor: "#FFFFFF",
        borderBottomWidth: 1,
        // width: 250,
        width: wp('80%'),
        // height: 35,
        height: hp('6%'),
        // marginBottom: 20,
        marginBottom: hp('6%'),
        flexDirection: "row",
        alignItems: "center"
      },
      inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: "#FFFFFF",
        flex: 1,
        color: "#00b5ec"
      },
      inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: "center"
      },
      buttonContainer: {
        // height: 45,
        height: hp('7%'),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // marginBottom: 20,
        marginBottom: hp('2%'),
        // width: 250,
        width: wp('80%'),
        // borderRadius: 30
        borderRadius: hp('5%')
      },
      signupButton: {
        backgroundColor: "#00b5ec",
        borderColor: "#00b5ec",
        borderWidth: 1,
        // marginTop: 10
        marginTop: hp('2%')
      },
      signUpText: {
        color: "#ffffff"
      }
    });
    
           
     

 