import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,Image
} from 'react-native';

export default class  Authentication extends React.Component {

  static navigationOptions = { header: null };
  
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync =  async() => {
    const userToken =await AsyncStorage.getItem('sessionid');
    
    
    this.props.navigation.replace(userToken ? 'Router' : 'Login');
  };

 
  render() {
    return (
      <View>
       
        <ActivityIndicator />
        <StatusBar barStyle="default"  />
      </View>
    );
  }
}

