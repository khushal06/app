import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity , Image } from 'react-native';
import { DrawerItems , createDrawerNavigator } from 'react-navigation-drawer';
 

export default class HomeApp extends React.Component {

   render (){
    return(


        <View style={styles.container}>

       <Image
       style={styles.stretch} 
       source = {require ("../assets/map.jpg")            }
       
       
       />

      



        </View>




    )



   }




}


const styles = StyleSheet.create({
    container: {
      paddingTop: 30,
    },
    stretch: {
      width: 400,
      height: 300,
      marginLeft: 120
    },
  });
  