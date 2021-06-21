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
  ScrollView,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './Login';
import DropDownItem from "react-native-drop-down-item";
const IC_ARR_DOWN = require('./ic_arr_down.png');
const IC_ARR_UP = require('./ic_arr_up.png');
    
export default class MedicalRecords extends React.Component {
  
  constructor(props) {
   
    super(props)
 
    this.state = {
 
    
    
      email: '',
      contents: [
        {
          title: "Sugar (Fasting)",
        },
        {
          title: "Sugar (Random)",
        },
        {
          title: "Complete Blood Picture (CBC)",
        }
      ]
 
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

 
  }

  // state = {
  //   contents: [
  //     {
  //       title: "Sugar (Fasting)",
  //     },
  //     {
  //       title: "Sugar (Random)",
  //     }
  //   ]
  // };

  

render() {
   
  return (
    
    <View style={styles.container}>
           <ScrollView style={{ alignSelf: 'stretch' }}>
        <Image style={styles.avatar} source={require('./add-plus-pngrepo-com.png')}/>
        <Text style={styles.info}>{this.state.email}</Text>
        <View style={styles.body}>
      <ScrollView style={{ alignSelf: 'stretch' }}>
        {
          this.state.contents
            ? this.state.contents.map((param, i) => {
              return (
                <DropDownItem
                  key={i}
                  // style={styles.dropDownItem}
                       style={styles.headText}
                  contentVisible={false}
                  invisibleImage={IC_ARR_DOWN}
                  visibleImage={IC_ARR_UP}
                  header={
                    <View style={styles.header}>
                      <Text style={{
                        fontSize: 20,
                        color: '#00BFFF',
                      }}>{param.title}</Text>
                    </View>
                  }
                >
              
                  <View style={styles.drop} >

  <TouchableHighlight

          // style={[styles.buttonContainer, styles.signupButton]}
          onPress={() =>
          
               this.props.navigation.navigate('ImageBrowser',{type: i})
             }
          >
           
            <Text style={styles.signUpText}>Scan Report</Text>
             
          </TouchableHighlight>
          <TouchableHighlight
          // style={[styles.buttonContainer, styles.signupButton]}
          onPress={() =>
          
               this.props.navigation.navigate('Trends',{type: i})
             }
          >
           
            <Text style={styles.signUpText}>View Trends</Text>
             
          </TouchableHighlight>
          <TouchableHighlight
          // style={[styles.buttonContainer, styles.signupButton]}
          onPress={() =>
          
               this.props.navigation.navigate('QRcode',{type: i})
             }
          >
           
            <Text style={styles.signUpText}>Share with Doctor</Text>
             
          </TouchableHighlight>

          </View>
                </DropDownItem>
              );
            })
            : null
        }
        <View style={{ height: 96 }}/>
      </ScrollView>
    </View>
    </ScrollView>
    </View>
  );
  }

}


const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   // height:650,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  //   paddingTop: 60,
  // },
    container: {
    // height:750,
    height:hp('100%'),
      //  justifyContent: 'center',
    // paddingTop: 100,
    // paddingLeft:80,
    paddingLeft:wp('6%'),
    // paddingRight:50,
    backgroundColor: "#ffffff"
  },
    body:{
    // marginTop:20,
    paddingLeft:wp('15%'),
    marginTop:hp('6%'),
  },
  info:{
    // fontSize:16,
    fontSize:hp('2.5%'),
   color: "#00BFFF",
    // marginTop:200
    marginTop:hp('30%'),
    paddingLeft:wp('17%')
  },
  header: {
    width: '100%',
    // paddingVertical: 8,
    paddingHorizontal: 12,
    // marginTop:20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  // headerTxt: {
  //   fontSize: 12,
  //   color: 'rgb(74,74,74)',
  //   marginRight: 60,
  //   flexWrap: 'wrap',
  // },
  //   avatar: {
  //   width: 130, 
  //   height: 130,
  //   borderRadius: 63,
  //   borderWidth: 4,
  //   borderColor: "white",
  //   marginBottom:10,
  //   alignSelf:'center',
  //   position: 'absolute',
  //   marginTop:50,
    
  // },
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
  // txt: {
  //   // fontSize: 14,
  //   fontSize: hp('2%'),
  // },
  headText: {
  
    // marginTop:20,
    marginTop:hp('3%'),
     color: "#00BFFF",
    //  fontSize:20,
    fontSize:hp('2%'),
     fontWeight: "600",
    //  paddingRight:70
    paddingRight:wp('20%')
 
   },
    signUpText: {

  //  marginTop:10,
  marginTop:hp('1%'),
    color: "white",
    // fontSize:17,
    fontSize:hp('2%'),
    fontWeight: "600",
    // paddingTop:10,
    paddingTop:hp('1.5%'),
    // paddingLeft:30,
    paddingLeft:wp('15%'),
    // paddingRight:30,
    paddingRight:wp('2%'),
    backgroundColor:"#00BFFF",
    // borderRadius:30,
    borderRadius:hp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
    // height:40,
    height:hp('6%'),
    // width:210
    width:wp('60%')
  }
});



// const styles = StyleSheet.create({
//   header:{
//     // backgroundColor: "#00BFFF"
//     height:100,
//     width:400
//   },
//   avatar: {
//     width: 130, 
//     height: 130,
//     borderRadius: 63,
//     borderWidth: 4,
//     borderColor: "white",
//     marginBottom:10,
//     alignSelf:'center',
//     position: 'absolute',
//     marginTop:50,
    
//   },
//   name:{
//     fontSize:22,
//     color:"#00BFFF",
//     fontWeight:'600',
//   },
//   body:{
//     marginTop:250,
//   },
  
//   bodyContent: {
//     flex: 1,
//     alignItems: 'center',
//     padding:30,
//   },
//   name:{
//     fontSize:28,
//     color: "#696969",
//     fontWeight: "600"
//   },
//   info:{
//     fontSize:16,
//    color: "#00BFFF",
//     marginTop:130
//   },
//   description:{
//     fontSize:16,
//     color: "#696969",
//     marginTop:10,
//     textAlign: 'center'
//   },
//   container: {
//     height:650,
   
//     // paddingTop: 100,
//     paddingLeft:100,
//     paddingRight:50,
//     backgroundColor: "#ffffff"
//   },
//   buttonContainer: {
//     marginTop:10,
//     height:50,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom:20,
//     width:250,
//     borderRadius:30,
//     backgroundColor: "#00BFFF",
  
//   },
//   signupButton: {
//     backgroundColor: "#00b5ec",
//     borderColor: "#00b5ec",
//     borderWidth: 1,
//     marginTop: 30
//   },
//   signUpText: {

//    marginTop:20,
//     color: "#00BFFF",
//     fontSize:20,
//     fontWeight: "600"

//   }
// })

