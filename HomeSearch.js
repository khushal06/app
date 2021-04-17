import React from 'react';
import {View,Text,Button, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements'
import AntDesign from 'react-native-vector-icons/AntDesign'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import  Entypo from 'react-native-vector-icons/Entypo'
import WeatherScreen from '../screens/WeatherScreen';



export default class HomeSearchScreen extends React.Component{
    render(){
        return(
          <View>

                <View style={styles.forinputbox} >

                  <Text style={styles.inputtext} >Where to</Text>
                   <View style ={styles.timecontainer}>
                          <AntDesign name={"clockcircle"} size={16} />
                            <Text> Now</Text>
                          <MaterialIcons name={"alarm"} size={16} />
                   </View>
                   


                    <View style={styles.row}>
                      <View style = {[styles.iconcontainer,{backgroundColor:"#e213ad"}]}>
                          <MaterialIcons name = {"beach_access"} size={12}/>           
                          <Button title = "PhoneCall" color = "red"   />
                      </View>
                    </View>

                    <View style={styles.row}>
                      <View style = {[styles.iconcontainer,{backgroundColor:"#e213ad"}]}>
                          <MaterialIcons name = {"beach_access"} size={12}/>           
                            <Button title = "WeatherScreen" color = "red"   />
                      </View>
                    </View>

                   <View/>





          </View>










          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
 forinputbox: {
   backgroundColor:"#b0b0b0",
      margin: 9,
      flexDirection:'row',
      justifyContent:"space-between",
      alignItems:"center",
      padding:8,
      borderRadius:20
    },
    inputtext:{
fontSize:20,
fontWeight:'600',
color:"#fff"
    },
timecontainer:{
  flexDirection:'row',
  justifyContent:"space-between",
  width:80,
  padding:10,
  backgroundColor:"#fff",
  borderRadius:30
},
row:{
 flexDirection:"row",
 alignItems:"center",
 padding:15,
 borderBottomWidth:1,
 borderColor:"#dbdbdb"
},
iconcontainer:{
backgroundColor:"#b7b7b7b",
padding:10,
borderRadius:5

},
destinationText:{
marginLeft:10,
fontWeight:"bold",
fontSize:17
}
  });