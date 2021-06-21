
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image, Alert,AsyncStorage,TouchableHighlight} from "react-native";
import DropDownItem from 'react-native-drop-down-item';
import { Icon } from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export  class Profile extends React.Component{
  
    
 constructor(props) {
     
        super(props)
  
        this.state={
            patient_id:'',
            p_name: '',
            address: '',
            contact_no: '',
            dob:'',
            gender:'',
            email: '',
            id:''
        }
        
     
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
                dob: responseJson[0].dob,
                gender: responseJson[0].gender,
                email : responseJson[0].email
            
              })
            
            }).catch((error) => {
              console.error(error);
            });
       
          }

         
render()
    {   return(
      
     
   
<View style={styles.Container}>   
<Image style={styles.avatar} source={require('./add-plus-pngrepo-com.png')}/>
<View >

<Text style={styles.headpro} > Profile</Text>
</View>
        
        <View style={styles.inputContainer}>
<Icon name="user" type="font-awesome" color="#00b5ec" />
<Text style={styles.textViewContainer} > {this.state.p_name } </Text>
</View>
<View style={styles.inputContainer}>
      <Icon name="map-marker" type="font-awesome" color="#00b5ec" />
     <Text style={styles.textViewContainer} > { this.state.address} </Text>
     </View>
<View style={styles.inputContainer}>
     <Icon name="phone" type="font-awesome" color="#00b5ec" />

           <Text style={styles.textViewContainer} > { this.state.contact_no} </Text>
           </View>

           <View style={styles.inputContainer}>
     <Icon name="birthday-cake" type="font-awesome" color="#00b5ec" />

           <Text style={styles.textViewContainer} > { this.state.dob} </Text>
           </View>

           <View style={styles.inputContainer}>
     <Icon name="venus-mars" type="font-awesome" color="#00b5ec" />

           <Text style={styles.textViewContainer} > { this.state.gender} </Text>
           </View>
<View style={styles.inputContainer}>
           <Icon name="envelope" type="font-awesome" color="#00b5ec" />
          <Text style={styles.textViewContainer} > {this.state.email} </Text> 
          </View>

          <View >

<Text style={styles.headacc} > Account</Text>
</View>
<View style={styles.inputContainer}>
<Icon name="sign-out" type="font-awesome" color="#00b5ec" />
<TouchableHighlight
          
          style={styles.text}
           onPress={() =>
      
        
            this.props.navigation.replace('Logout')
          }
           >
             <Text style={styles.signUpText}>Logout</Text>
             
           </TouchableHighlight>

          </View>

          {/* <View style={styles.inputContainer}>
<Icon name="toggle-on" type="font-awesome" color="#00b5ec" />
<TouchableHighlight
          
          style={styles.text}
           onPress={() =>
      
        
            this.props.navigation.replace('Logout')
          
            
          }
           >
             <Text style={styles.signUpText}>Switch Account</Text>
             
           </TouchableHighlight>

          </View> */}

          </View>
    )
    }
    
}
export default Profile;
const styles = StyleSheet.create(
{
//  MainContainer:
//  {
//     justifyContent: 'center',
//     flex:1,
//     // margin: 10
//     margin: hp('10%')
  
//  },
 text:{
    // padding: 5
    padding: hp('2%')
 },
 Container: {
  // height:800,
  height:hp('100%'), 
  // paddingTop: 5,
  paddingTop: hp('2%'),
  // flex: 1,
  // justifyContent: "center",
  // alignItems: "center",
  backgroundColor: "#ffffff"
},
 
//  rowViewContainer: {
//     // fontSize: 20,
//     fontSize: hp('3%'),
//     // paddingRight: 10,
//     paddingRight: wp('9%'),
//     // paddingTop: 10,
//     paddingTop: 10,
//     // paddingBottom: 10,
//     paddingBottom: 10,
//   },
 
  textViewContainer: {
    
    // padding:5,
    padding:hp('2%'),
    // fontSize: 17,
    fontSize: hp('2.3%'),
    color: '#000',
   },
   headpro:{
    // paddingLeft:20,
    paddingLeft:wp('8%'),
    // paddingBottom:10,
    paddingBottom:hp('1%'),
    // fontSize: 20,
    fontSize: hp('3%'),
    color: '#00b5ec',
    // marginTop:180
    marginTop:hp('25%')
   },
   headacc:{
    // paddingLeft:20,
    paddingLeft:wp('8%'),
    // paddingBottom:10,
    paddingBottom:hp('1%'),
    // fontSize: 20,
    fontSize: hp('3%'),
    color: '#00b5ec',
    // marginTop:10
    marginTop:hp('1%')
   },

  signUpText: {
    color: "#000000",
    // fontSize: 17,
    fontSize: hp('2.3%'),
  },
  // header:{
  //   backgroundColor: "#00BFFF",
  //   height:200,
  // },
  inputContainer: {
    borderBottomColor: "#00b5ec",
    backgroundColor: "#FFFFFF",
    // borderBottomWidth: 1,
    // width: 270,
    // height: 45,
    height: hp('6%'),
    // marginLeft:30,
    marginLeft:wp('8%'),
    // marginBottom: 5,
    marginBottom: hp('1%'),
    flexDirection: "row",
    alignItems: "center",
    // marginTop:5
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
  }
  // avatar: {
  //   width: 130, 
  //   height: 130,
  //   borderRadius: 63,
  //   borderWidth: 4,
  //   borderColor: "white",
  //   marginBottom:10,
  //   alignSelf:'center',
  //   position: 'absolute',
  //   marginTop:50,
  // }
});
