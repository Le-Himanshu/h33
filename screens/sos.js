import React, {Component} from "react";
import { Text,View,TouchableOpacity,TextInput,StyleSheet,Button,ScrollView, Alert} from "react-native";
import * as SMS from "expo-sms"
import * as Location from "expo-location"
import db from "../config"
export default class SOS extends Component{
constructor(){
    super();
    this.state={
     location:"",
     mapRegion : null
    }
}
getLocation=async()=>{
 let {status}=await Location.requestForegroundPermissionsAsync()
 if(status!=="granted"){
     Alert.alert("permission not granted")
 }
 else{
     let myLocation= await Location.getCurrentPositionAsync({})
     this.setState({ location: JSON.stringify(myLocation) })
     
 }   
}



sendSms=async()=>{
const userRef=await db.collection("users").where("contact","==",window.contact).get()
var emergencyContact=""
var emergencyContact2=""
console.log(window.contact)
if(userRef.docs.length===0){
Alert.alert("user not found")    
}
else{
    userRef.docs.map(doc=>{
        emergencyContact=doc.data().emergencyContact
        emergencyContact2=doc.data().emergencyContact2
    })
}
await this.getLocation()
console.log(this.state.location)
const isAvailable=await SMS.isAvailableAsync()
if(isAvailable){
const {result}=await SMS.sendSMSAsync(
    [emergencyContact,emergencyContact2],
    this.state.location +" Send Help"
)    
}
else{
    Alert.alert("message not sent")
}
}
    render(){
    return(
        
        <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor : 'red'}}>
       <ScrollView>    
     <Text style={{ marginTop: 5,
    marginLeft: 22,
     fontWeight: 'bold',
     fontStyle: "italic",
    fontSize: 30,
    padding : 20,}}>SOS Screen</Text>   
     <View style = {{flex:1,justifyContent:"center",alignItems:"center"}}> 
     <TouchableOpacity style={{  height:70,width:100,backgroundColor: 'purple',marginTop:100 , marginLeft:100 , justifyContent:"center",alignItems:"center" }}>
          <Text style={{justifyContent:"center",alignItems:"center", fontWeight: 'bold',
     fontStyle: "italic",
    fontSize: 20,}} onPress={this.sendSms}>Accident</Text>
        </TouchableOpacity>

   </View>
   <View style = {{flex:1,justifyContent:"center",alignItems:"center" }}> 
   <TouchableOpacity style={{  height:70,width:200,backgroundColor: 'blue',marginTop:100 , marginLeft:100 ,justifyContent:"center",alignItems:"center" }}>
          <Text style={{justifyContent:"center",alignItems:"center", fontWeight: 'bold',
     fontStyle: "italic",
    fontSize: 20,}} onPress={this.sendSms}>Vehicle Trouble</Text>
        </TouchableOpacity>

</View>
<View style = {{flex:1,justifyContent:"center",alignItems:"center" }}> 
<TouchableOpacity style={{ height:70,width:200,backgroundColor: 'yellow',marginTop:100 , marginLeft:100 ,justifyContent:"center",alignItems:"center" }}>
          <Text style={{justifyContent:"center",alignItems:"center", fontWeight: 'bold',
     fontStyle: "italic",
    fontSize: 20,}} onPress={this.sendSms}>Unsafe Situation</Text>
        </TouchableOpacity>

   </View>
   <View style = {{flex:1,justifyContent:"center",alignItems:"center" }}> 
   
   </View> 
   </ScrollView> 
    </View>
     
    )
}
}
