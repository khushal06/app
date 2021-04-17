import React from "react"
import { render } from "react-dom";
import { StyleSheet, Text, View , Linking ,Button ,ActivityIndicator } from 'react-native';

export default class WeatherScreen extends React.Component {
 constructor(){
   super()
   this.state = {
     Weather : ""
   }
 }


 getWeather= async ()=>{
 var Url = "https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139"
 return fetch(Url)
  .then(response =>{
    response.json()
  })
   .then(responsejson =>{
     this.setState({
       Weather : responsejson
     })
   })
   .catch(Error => {

     console.log(Error)
   })
 }


  componentDidMount =()=>{

  //this.getWeather()



  }
    render(){
      if(this.state.Weather === "" ){
         return(
           <View>
            <Text>
      Loading ...
            </Text>
           <ActivityIndicator size="large" /> 
           </View>
         )


      }
   
  }
  }






  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});