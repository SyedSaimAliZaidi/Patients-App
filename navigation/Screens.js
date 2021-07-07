import React from "react";
import { Easing, Animated, Dimensions } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

import { Block } from "galio-framework";

// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Icon, Header } from "../components";
import { argonTheme, tabs } from "../constants";

// screens
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Register from "../screens/Register";
import Login from "../screens/Login";
import MedicalRecords from "../screens/MedicalRecords";
import GeneralPrescription from "../screens/GeneralPrescription";
import QRcode from "../screens/components/QRcode"
import Trends from "../screens/components/Trends"
import ImageBrowser from "../screens/components/ImageBrowser"

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabStack(props) {
  return (
    // <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} family="AntDesign" color={color} />;
          },          
        })}
        tabBarOptions={{
          activeTintColor: argonTheme.COLORS.PRIMARY,
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}


export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none" initialRouteName="App">
      <Stack.Screen name="Login" component={Login} options={{headerShown:"none"}}/>
      <Stack.Screen name="Register" component={Register} options={{headerShown:"none"}}/>
      <Stack.Screen name="ImageBrowser" component={ImageBrowser} options={{headerShown:"none"}} initialParams={{ type: 0 }}/>
      <Stack.Screen name="Trends" component={Trends} options={{headerShown:"none"}} initialParams={{ type: 0 }}/>
      <Stack.Screen name="QRcode" component={QRcode} options={{headerShown:"none"}} initialParams={{ type: 0 }}/>
      <Stack.Screen name="GeneralPrescription" component={GeneralPrescription} options={{headerShown:"none"}}/>
      <Stack.Screen name="MedicalRecords" component={MedicalRecords} options={{headerShown:"none"}}/>
      <Stack.Screen name="App" component={TabStack} options={{headerShown:"none"}}/>
    </Stack.Navigator>
  );
}

// function AppStack(props) {
//   return (
//     <Drawer.Navigator
//       style={{ flex: 1 }}
//       drawerContent={props => <CustomDrawerContent {...props} />}
//       drawerStyle={{
//         backgroundColor: "white",
//         width: width * 0.8
//       }}
//       drawerContentOptions={{
//         activeTintcolor: "white",
//         inactiveTintColor: "#000",
//         activeBackgroundColor: "transparent",
//         itemStyle: {
//           width: width * 0.75,
//           backgroundColor: "transparent",
//           paddingVertical: 16,
//           paddingHorizonal: 12,
//           justifyContent: "center",
//           alignContent: "center",
//           alignItems: "center",
//           overflow: "hidden"
//         },
//         labelStyle: {
//           fontSize: 18,
//           marginLeft: 12,
//           fontWeight: "normal"
//         }
//       }}
//       initialRouteName="Home"
//     >
//       <Drawer.Screen name="Home" component={HomeStack} />
//       <Drawer.Screen name="Profile" component={ProfileStack} />
//       <Drawer.Screen name="Account" component={Register} />
//       <Drawer.Screen name="Elements" component={ElementsStack} />
//       <Drawer.Screen name="Articles" component={ArticlesStack} />
//     </Drawer.Navigator>
//   );
// }

