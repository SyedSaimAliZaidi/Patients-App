import React from 'react';
// import { createStackNavigator } from 'react-navigation-stack';
// import {createAppContainer} from 'react-navigation';
import { Icon ,CheckBox} from "react-native-elements";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import ValidationComponent from 'react-native-form-validator';
// import { Login } from './login';
export   class Medicines extends ValidationComponent {

 
  constructor(props) {
    
      super(props)
   
      this.state = {
   
        details: this.props.navigation.state.params.details.replace(/\\n/g, "\n")
      }

  };
      




    render(){
      return(
          <View style={styles.Container1}>
          

<View style={styles.container}>
{/* <Icon name="user-md" type="font-awesome"  color="#00b5ec" />  */}
         <Text style={ styles.Head}>Prescription</Text></View> 
  <ScrollView  style={styles.behind} enabled >
                
      <Text style={styles.pres}>{this.state.details}</Text>
        
        </ScrollView>
        </View>
        );
            }
          
          }
export default Medicines;
//  const AppNav = createAppContainer(AppNavigator);
//  export default AppNav;
          
const styles = StyleSheet.create({
  Container1: {
    // color: "#00b5ec",
    backgroundColor: "white",
    // borderRadius: 6,
    borderRadius: hp('2%'),
    borderColor: "gray",
     borderWidth: 3,
    // margin:20,
    margin:hp('3%'),
    // marginTop: 50,
    marginTop: hp('9%'),
    // padding:6
    padding:hp('1%')
    

  },
  container: {
    flex: 1,
    alignItems: 'center',
    // height: 100,
    height: hp('100%'),
    justifyContent: 'center',
  },
  pres: {
      // width: 270,
      width: wp('80%'),
      // padding:20,
      padding:hp('3%'),
    //  marginBottom:100,
    marginBottom:hp('5%'),
    paddingLeft:0,

  //  marginBottom:50,
  marginBottom:50,
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontFamily:"sans-serif-thin"
  },
  behind: {
   

    // position: 'absolute',
    marginBottom:30,
    marginBottom:hp('6%'),
    // marginRight:10,
    marginTop:0,
    // right:23,
    left:10,
    // top:30,
    top:hp('4%'),
    bottom: 0
  
   
  },
  Head:

    {  fontWeight: "bold", 
    // fontSize: 25,
    fontSize: hp('3.5%'),
    // width:200,
    width:wp('60%'),
    backgroundColor:"#00b5ec", 
    color: "white",
textAlign:"center",
// borderWidth:3,
borderWidth:hp('0.5%'),
// borderRadius:20,
borderRadius:hp('3%'),
borderColor:"white",
// padding:10,
padding:hp('1.5%'),
    //  margin:55,
    margin:hp('10%'),
     marginVertical:0,
   
  }
});