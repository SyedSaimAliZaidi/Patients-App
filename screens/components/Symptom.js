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
export   class Symptom extends ValidationComponent {

 
  constructor(props) {
    
      super(props)
   
      this.state = {
   
        SymArray: [],
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
        checkbox7: false,
        checkbox8: false,
        checkbox9: false
      }
   
    
  };
      

  CheckValues = () => {
    if(this.state.SymArray.length == 0){
      alert("Kindly, select Symptoms..");
    }
    else{
     fetch('http://instrux.live/healthapp_patient/API/new/prescribe.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
   
      

      SymArray: this.state.SymArray
   

   
    })
   
   }).then((response) => response.text())
        .then((responseJson) => {
 
  // Showing response message coming from server after inserting records.
  this.props.navigation.navigate('Medicines',{details:responseJson})
   
        }).catch((error) => {
          console.error(error);
        }); 
    
   
    }
  } 


  
  AddItemsToArray = (a,b)=>{

 if (b==true){
    //Adding Items To Array.
   this.state.SymArray.push(a);

    // Showing the complete Array on Screen Using Alert.
    // Alert.alert(this.state.SymArray.length.toString());
 }

else 
{
  var array = [...this.state.SymArray]; // make a separate copy of the array
  var index = array.indexOf(a);
  if (index !== -1) {
    array.splice(index, 1);
    this.setState({SymArray: array});
  }
  
}
// Alert.alert(this.state.SymArray.length.toString());
};


    render(){
      return(

  <ScrollView  style={{backgroundColor: "white"}} enabled >
               
               <View  style={styles.container}>
          <Icon name="user-md" type="font-awesome"  color="#00b5ec" />  
         <Text style={{ fontWeight: "bold", fontSize: 25, color: "#00b5ec", paddingBottom:10 }}>Symptoms</Text></View>
         
    
         <View style={styles.CheckBoxStyle}>
        <CheckBox
        // value="Pain Killer"
      checked={this.state.checkbox1}
          title="Body Ache and Pain"
          value={this.state.checkbox1}

          onPress={() => {this.setState({ checkbox1: !this.state.checkbox1 });this.AddItemsToArray("Pain Killer",!this.state.checkbox1);}}
        />
    
        <CheckBox
        // value="Fever"
          title="Fever"
          value={this.state.checkbox2}
          checked={this.state.checkbox2}
          onPress={() =>{this.setState({ checkbox2: !this.state.checkbox2 }); this.AddItemsToArray("Fever",!this.state.checkbox2)}}
        />
      
        <CheckBox
        // value="Cough"
          title="Cough"
          checked={this.state.checkbox3}
          value={this.state.checkbox3}
    
          onPress={() =>{this.setState({ checkbox3: !this.state.checkbox3 }); this.AddItemsToArray("Cough",!this.state.checkbox3)}}
        />
      
     
        <CheckBox
        // value="Multivitamins & Minerals"
        value={this.state.checkbox4}
        checked={this.state.checkbox4}
          title="Weakness and Vitamin Deficiency"
         
          onPress={() =>{this.setState({ checkbox4: !this.state.checkbox4 }); this.AddItemsToArray("Multivitamins & Minerals",!this.state.checkbox4)}}
        />
      
        <CheckBox
        // value="Anti-allergy"
          title="Allergy"
          checked={this.state.checkbox5}
          value={this.state.checkbox5}
          
          onPress={() =>{this.setState({ checkbox5: !this.state.checkbox5 }); this.AddItemsToArray("Anti-allergy",!this.state.checkbox5)}}
        />
     
        <CheckBox
        // value="Anti-depressant"
          title="Depression and Anxiety"
          value={this.state.checkbox6}
          checked={this.state.checkbox6}
         
          onPress={() => {this.setState({ checkbox6: !this.state.checkbox6 });this.AddItemsToArray("Anti-depressant",!this.state.checkbox6)}}
        />
    
        <CheckBox
        // value="Infection"
          title="Infection"
          value={this.state.checkbox7}
          checked={this.state.checkbox7}
          onPress={() => { this.setState({ checkbox7: !this.state.checkbox7 });this.AddItemsToArray("Infection",!this.state.checkbox7)}}
        />
        <CheckBox
        // value="Vomitting"
          title="Vomiting and Nausea"
          value={this.state.checkbox8}
          checked={this.state.checkbox8}
          
          onPress={() =>{this.setState({ checkbox8: !this.state.checkbox8 }); this.AddItemsToArray("Vomitting",!this.state.checkbox8)}}
        />
        <CheckBox
        // value="Asthma"
     
          title="Asthma and breathing issues"
          value={this.state.checkbox9}
          checked={this.state.checkbox9}
          onPress={() => {this.setState({ checkbox9: !this.state.checkbox9 });this.AddItemsToArray("Asthma",!this.state.checkbox9)}}
        />
      </View>
      
          <TouchableHighlight
            style={[styles.buttonContainer, styles.signupButton]}
            onPress={
              this.CheckValues}
          >
            <Text  style={{ color: "white", fontSize:15}}>Generate Prescription</Text>
          </TouchableHighlight> 
        
        </ScrollView>
        );
            }
          
          }
export default Symptom;
//  const AppNav = createAppContainer(AppNavigator);
//  export default AppNav;
          
const styles = StyleSheet.create({
  color: {
    color: "#00b5ec"
  },
  CheckBoxStyle:{
    justifyContent: "flex-end",
    margin: 1
    
  },
  container: {
    // height:650,
    // paddingTop: 40,
    paddingTop: hp('7%'),
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  formContainer: {
    // marginTop: 30,
    marginTop: hp('5%'),
    alignItems:'center'
  },
  // inputContainer: {
  //   borderBottomColor: "#00b5ec",
  //   backgroundColor: "#FFFFFF",
  //   borderBottomWidth: 1,
  //   // width: 250,
  //   width: wp('40%'),
  //   // height: 45,
  //   height: 45,
  //   // marginBottom: 25,
  //   marginBottom: 25,
  //   flexDirection: "row",
  //   alignItems: "center"
  // },
  // inputs: {
  //   height: 45,
  //   marginLeft: 16,
  //   borderBottomColor: "#FFFFFF",
  //   flex: 1,
  //   color: "#00b5ec"
  // },
  // inputIcon: {
  //   width: 30,
  //   height: 30,
  //   marginLeft: 15,
  //   justifyContent: "center"
  // },
  buttonContainer: {
    // height: 50,
    height: hp('7%'),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // margin:10,
    // margin:hp('1%'),
    // marginLeft:60,
    marginLeft:wp('20%'),
    // width: 250,
    width: wp('60%'),
    // borderRadius: 30,
    borderRadius: hp('5%'),
  },
  signupButton: {
    backgroundColor: "#00b5ec",
    borderColor: "#00b5ec",
    borderWidth: 1
    
  },
  // Add: {
  //   backgroundColor: "#00b5ec",
  //   borderColor: "#00b5ec",
  //   borderRadius: 50,
  //   width:50,
  //   height: 50,
  // },
  // AddText: {
  //   color: "#ffffff",
  //   textAlignVertical: "center",
  //   paddingLeft:15,
    
    
  //   fontSize:35,
  // },
  signUpText: {
    color: "#ffffff"
  },
  error:{
    color: "red",
    //  paddingTop: 70,
    paddingTop: hp('5%'),
  
  }
});