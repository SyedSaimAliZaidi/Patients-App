import React, { Component } from "react";
import { Icon } from "react-native-elements";
 import ValidationComponent from 'react-native-form-validator';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  AsyncStorage,
  BackHandler,
  Picker
} from "react-native";
export  class Login extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      res: false,
      authenticated : false
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  LoginVerify = e => {
    const a=this.validate({
      email: {email: true, required: true},
      password :{password: true , required: true}
      });
      
    fetch('http://instrux.live/healthapp_patient/API/new/newlogin.php', {
      method: "POST",
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
     
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
        
      })
      
    })
      .then(response => response.text())
      .then((responseJson) => {
       
            this.setState({
              
            res:responseJson,
           }) ;
        
            //  Showing response message coming from server after inserting records.
               if(this.state.res!="true")
               {
                Alert.alert(responseJson);
               }
                 })
      .catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
         // ADD THIS THROW error
          throw error;
        });   
  };
  onClickListener = viewId => {
    
    Alert.alert("Alert", "Button pressed " + viewId);
  };
 

  render() {
    
    return (
      
      <View
        style={styles.container}
        onLayout={event => {
          var { x, y, width, height } = event.nativeEvent.layout;
        }}
      > 
        <Text style={{ fontWeight: "bold", fontSize: 40, color: "#00b5ec" ,justifyContent: "center"}}>
          All-In-One Health
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 40, color: "#00b5ec" ,justifyContent: "center"}}>
          Application
        </Text>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
          <Icon name="envelope" type="font-awesome" color="#00b5ec" />
            <TextInput
              style={styles.inputs}
              placeholder= "Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={email => this.setState({ email })}
              returnKeyType = { "next" }
              onSubmitEditing={() => { this.secondTextInput.focus(); }}
            /></View>
           

          <View style={styles.inputContainer}>
          <Icon name="lock" type="font-awesome" color="#00b5ec" />

            <TextInput
              style={styles.inputs} 
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({ password })}
              ref={(input) => { this.secondTextInput = input; }}
            /></View>



          <Text style={styles.responseText}>{this.state.response}</Text>
          <TouchableHighlight
            underlayColor="#00b5ec"
            style={[styles.buttonContainer, styles.signupButton]}
            onPress={
              this.LoginVerify}
          >
            <Text style={styles.signUpText}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight
           style={[styles.buttonContainer, styles.signupButton]}
             underlayColor="#00b5ec"
            onPress={() =>
               this.props.navigation.navigate('Register')}
           >
             <Text style={styles.signUpText}>Register</Text>
           </TouchableHighlight>
          <TouchableHighlight
           
           //  color="#00b5ec"
           onPress={() =>
             this.props.navigation.navigate('ForgetPassword') }
           >
            <Text  style={{ color: "#00b5ec", paddingLeft:15, paddingBottom:20}}>Forgot Password?</Text>
           </TouchableHighlight>
          
        
          
          
          <Text>{"\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}</Text>
          { this.state.res === "true" ?
            
            this.props.navigation.replace("Router",AsyncStorage.setItem('sessionid',this.state.email),{
              email:this.state.email
              
            })
            :<Text style={styles.responseText}>incorrect email Or password</Text>
          }
          
        </View>
      
      
      </View>
     
      
    );
  }


}



export default Login;


const styles = StyleSheet.create({
  responseText: {
    color: "rgb(255,0,0)", 
    // fontSize: 15
    fontSize: hp('1%')
  },
  color: {
    color: "#00b5ec"
  },
  container: {
    // width: wp('84.5%'),
    // height: hp('17%'),
    // paddingTop: 170,
    paddingTop: hp('25%'),
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  formContainer: {
    // marginTop: 50,
    marginTop: hp('8%'),
    alignItems:"center"
  },
  inputContainer: {
    borderBottomColor: "#00b5ec",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    // width: 270,
    width: wp('80%'),
    // height: 35,
    height: hp('5%'),
    // marginBottom: 30,
    marginBottom: hp('4%'),
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    // height: 45,
    height: hp('10%'),
    // marginLeft: 16,
    marginLeft: wp('3%'),
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
    width: wp('70%'),
    // borderRadius: 30
    borderRadius: hp('5%')
  },
  signupButton: {
    backgroundColor: "#00b5ec",
    borderColor: "#00b5ec",
    borderWidth: 1,
    // marginTop: 10
    marginTop: hp('1%')
  },
  signUpText: {
    color: "#ffffff"
  },
  error:{
    color: "red",
    //  paddingTop: 70,
  }
  
});