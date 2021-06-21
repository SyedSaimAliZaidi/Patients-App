import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { RadioButton } from 'react-native-paper';
import { Icon } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  BackHandler
} from "react-native";
import ValidationComponent from 'react-native-form-validator';
export   class Register extends ValidationComponent {

 
  constructor(props) {
   
      super(props)

      this.state = {
   
        
    
        p_name: '',
        address: '',
        contact_no: '',
        dob: '',
        radiobtn: ['Male', 'Female', 'Other'],
        checked: 0,
        gender: '',
        email: '',
        password:'',
    
      
   
      };
     
        
    
   
    }
      
    


 
      UserRegistrationFunction = () =>{
      const a=this.validate({
        p_name: { required: true},
        email: {email: true, required: true},
        contact_no: {numbers: true, required: true},
        dob: {date: 'YYYY-MM-DD', required: true},
        password :{password: true, minlength:5, maxlength:15 , required: true}
       
        
        });
      if(a==true)
      {
   

   const { p_name }  = this.state;
   const { address }  = this.state;
   const { contact_no }  = this.state ;
   const { dob }  = this.state ;
   const { gender } = this.state;
   const { email }  = this.state ;
   const { password }  = this.state ;
 
  
  fetch('http://instrux.live/healthapp_patient/API/new/email.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
   
      p_name: p_name,

      address: address,
   
      contact_no: contact_no,
      dob: dob,
      gender : gender,
      email: email,
      password: password,
    
    
   
    })  
   }).then((response) => response.text())
        .then((responseJson) => {
          Alert.alert(responseJson);
         
  
        }).catch((error) => {
          console.error(error);
        });
    
   
    }
  }
    render() {

      return (
   
     
      
          <KeyboardAvoidingView behavior="padding" style={styles.container}  enabled >
               < KeyboardAwareScrollView   enabled >
          <Text style={{ fontWeight: "bold", fontSize: 40, color: "#00b5ec", paddingBottom:20, paddingLeft:70}}>Register</Text>

          <View style={styles.inputContainer}>
            <Icon name="user" type="font-awesome" color="#00b5ec" />
            
          <TextInput
            
            // Adding hint in Text Input using Place holder.
         
           
            style={styles.inputs}
            placeholder="Full-Name"
            underlineColorAndroid="transparent"
            onChangeText={p_name => this.setState({p_name})}
            onSubmitEditing={() => { this.secondTextInput.focus(); }}
   
          
          /></View>
    {this.isFieldInError('p_name') && this.getErrorsInField('p_name').map(errorMessage => <Text style={styles.error}>* The field "name" is mandatory.</Text>) }
  
    <View style={styles.inputContainer}>
            <Icon name="map-marker" type="font-awesome" color="#00b5ec" />

            <TextInput
              style={styles.inputs}
              placeholder="Address"
              underlineColorAndroid="transparent"
              onChangeText={address => this.setState({ address })}
              returnKeyType = { "next" }
              ref={(input) => { this.secondTextInput = input; }}
              onSubmitEditing={() => { this.thirdTextInput.focus(); }}
            />
          </View>

<View style={styles.inputContainer}>
            <Icon name="phone" type="font-awesome" color="#00b5ec" />

            <TextInput
              style={styles.inputs}
              placeholder="Contact Number"
              underlineColorAndroid="transparent"
              onChangeText={contact_no => this.setState({ contact_no })}
              returnKeyType = { "next" }
              ref={(input) => { this.thirdTextInput = input; }}
              onSubmitEditing={() => { this.fourthTextInput.focus(); }}
            />
           </View>
      {this.isFieldInError('contact_no') && this.getErrorsInField('contact_no').map(errorMessage => <Text style={styles.error}>* {errorMessage}</Text>) }
  
      <View style={styles.inputContainer}>
            <Icon name="birthday-cake" type="font-awesome" color="#00b5ec" />

            <TextInput
              style={styles.inputs}
              placeholder="YYYY-MM-DD"
              underlineColorAndroid="transparent"
              onChangeText={dob => this.setState({ dob })}
              returnKeyType = { "next" }
              ref={(input) => { this.fourthTextInput = input; }}
              onSubmitEditing={() => { this.fifthTextInput.focus(); }}
            />
           </View>
           {this.isFieldInError('dob') && this.getErrorsInField('dob').map(errorMessage => <Text style={styles.error}>* {errorMessage}</Text>) }
           
           




    <View style={styles.inputContainer}>
            <Icon name="envelope" type="font-awesome" color="#00b5ec" />
            <TextInput
              style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={email => this.setState({ email })}
              returnKeyType = { "next" }
              ref={(input) => { this.fifthTextInput = input; }}
              onSubmitEditing={() => { this.sixthTextInput.focus(); }}
              
            />
           </View>
      {this.isFieldInError('email') && this.getErrorsInField('email').map(errorMessage => <Text style={styles.error}>* {errorMessage}</Text>) }
         
           <View style={styles.inputContainer}>
            <Icon name="lock" type="font-awesome" color="#00b5ec" />

            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({ password })}
              returnKeyType = { "next" }
              ref={(input) => { this.sixthTextInput = input; }}
              
            />
              </View>   
             {this.isFieldInError('password') && this.getErrorsInField('password').map(errorMessage => <Text style={styles.error}>* {errorMessage}</Text>) }
            
             <View style={styles.radio}>
           {this.state.radiobtn.map((data, key) => {
    return (
        <View  key={key}>
            {this.state.checked == key ?
                <TouchableOpacity style={styles.btn}>
                    <Image style={styles.img} source={require("./rb_selected.png")}/>
                    <Text style={{ fontSize: 16, color: "#00b5ec"}}>{data}</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={()=>{this.setState({checked: key ,gender: data})}} style={styles.btn}>
                    <Image style={styles.img} source={require("./rb_unselected.png")} />
                    <Text  style={{ fontSize: 16, color: "#00b5ec"}}>{data}</Text>
                </TouchableOpacity>
            }
        </View>
    )
})}
 </View>


          <TouchableHighlight
            style={[styles.buttonContainer, styles.signupButton]}
            underlayColor="#00b5ec"
            onPress={this.UserRegistrationFunction}
          >
            <Text style={styles.signUpText}>Register</Text>
          </TouchableHighlight>
          </ KeyboardAwareScrollView  > 
          
        </KeyboardAvoidingView> 
      
        
        );}


      
      }



        

export default Register;      
const styles = StyleSheet.create({
  color: {
    color: "#00b5ec"
  },
  container: {
    // height:800,
    height:hp('100%'),
    // paddingTop: 60,
    paddingTop: hp('10%'),
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
 
  formContainer: {
    // marginTop: 30,
    marginTop: hp('10%'),

    alignItems:'center'
  },
  inputContainer: {
    borderBottomColor: "#00b5ec",
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    // width: 270,
    width: wp('80%'),
    // height: 45,
     height: hp('6.5%'),
    // marginBottom: 20,
    marginBottom: hp('2.7%'),
    flexDirection: "row",
    alignItems: "center"
  },
  radio: {
    // borderBottomColor: "#00b5ec",
    // backgroundColor: "#FFFFFF",
    // borderBottomWidth: 1,
    // width: 270,
    width: wp('80%'),
    // height: 45,
    height: hp('6%'),
    // marginBottom: 20,
    marginBottom: hp('3%'),
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
    // marginBottom: 80,
    marginBottom: hp('5%'),
    // width: 250,
    width: wp('80%'),
    // borderRadius: 30,
    borderRadius: hp('5%'),
    // marginTop:10
    marginTop:hp('1%')
  },
  signupButton: {
    backgroundColor: "#00b5ec",
    borderColor: "#00b5ec",
    borderWidth: 1,
    // paddingLeft:100
  },
  signUpText: {
    color: "#ffffff"
  },
  error:{
    color: "red",


  },
  img:{
    // height:20,
    height:hp('3%'),
    // width: 20,
    width: wp('6%'),
    
},
btn:{
    flexDirection: 'row',
    // paddingLeft: 20,
    paddingLeft: wp('7%'),
}

});






