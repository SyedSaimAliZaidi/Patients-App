import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export default class  Logout extends React.Component {
  
    componentDidMount() {
        this.Log();
      }
Log = () => {
   AsyncStorage.removeItem('sessionid');
    this.props.navigation.replace('Login');
  };

  
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}