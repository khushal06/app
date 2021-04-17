import React from "react"
import { render } from "react-dom";
import { StyleSheet, Text, View , Linking ,Button } from 'react-native';
import HomeApp from "../components/HomeApp"
import MessageScreen from "../components/Message"
import HomeSearchScreen from '../components/HomeSearch'


export default class WelcomeScreen extends React.Component {

  
    render(){
    return (
      <View style={styles.container}>
        
        <HomeApp/>
        <MessageScreen/>
        <HomeSearchScreen/>
        
        
      </View>
    );
  }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
     
      backgroundColor: '#ecf0f1',
   
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });