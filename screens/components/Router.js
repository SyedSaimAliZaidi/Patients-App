import { StackNavigator, TabNavigator,createAppContainer } from "react-navigation";
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {FontAwesome} from 'react-native-fontawesome';
import {Ionicons} from 'react-native-vector-icons';
import Home from './Home';
import Camera from './Camera';

import Profile from  './Profile'
export class Router extends React.Component {


  
    render() {
      
      return (
        <AppCon/>
          
      );
      }
    
    }


    const Tab= createBottomTabNavigator(
      {
        Home: {
          screen: Home,
        },
        Profile: {
          screen: Profile,
        },
        // Profile: {
        //   screen: Profile,
        // },
       
      },

      {
        defaultNavigationOptions: ({navigation}) => ({
        
          tabBarIcon: ({horizontal, tintColor}) => {
            const {routeName} = navigation.state;
            let iconName;
            if (routeName === 'Home') {
              iconName = 'ios-home';
            } 
            else if (routeName === 'Profile') {
              iconName = 'ios-person';
            } 
            // else if (routeName === 'Profile') {
            //   iconName = 'ios-person';
            // } 
            return (
              <Ionicons
                name={iconName}
                size={horizontal ? 20 : 25}
                color={tintColor}
              />
            );
          },
        }),
      }
      
    );

const AppCon= createAppContainer(Tab);
export default AppCon;