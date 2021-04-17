import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from "./screens/WelcomeScreen"
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { AppDrawerNavigator } from "./components/AppDrawerNavigator";
import WeatherScreen from "./screens/WeatherScreen"
import PhoneCall from "./screens/PhoneCall"

export default function App() {
  return (
    <View style={styles.container}>
      
      <AppContainer/>

    </View>
  );
}
const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  WeatherScreen : {screen : WeatherScreen},
  Drawer: { screen : AppDrawerNavigator },
  PhoneCall : {screen : PhoneCall }
  
});

const AppContainer = createAppContainer(switchNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
