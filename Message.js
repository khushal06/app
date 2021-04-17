import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import { DrawerItems , createDrawerNavigator } from 'react-navigation-drawer'

 

export default class MessageScreen extends React.Component {

   render (){
    return(


   <View style = {styles.title }>

    <Text style = {styles.mytext }>

     Have a Good Day


    </Text>
  
    <Text style = {styles.text2 }>
      
       Happy Journey

    </Text>

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
    title : {
           backgroundColor : "#543aef"  ,     
           padding : 10,
           borderTopLeftRadius : 10,
           borderTopRightRadius : 10,
             


        
    },
    mytext : {





    },

    text2 : {





    }



  });
  