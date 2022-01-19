import React, {Component} from "react";
import { Text,View,TouchableOpacity,TextInput,Alert,ScrollView} from "react-native";
import db from "../config"
export default class Profile extends Component{
constructor(){
    super(),
    this.state={
        name:"",
        contact:"",
        age:"",
        emergencyContact:"",
        emergencyContact2:"",

    }
}
getDetails=()=>{
    var userRef,userName,contact,age,emergencyContact,emergencyContact2    
    userRef=db.collection("users").where("contact","==",window.contact).get()
    if(userRef.docs.length===0){
        Alert.alert("could not read data")
    }
    else{
    userRef.docs.map(doc=>{
        userName=doc.data().name
        contact=doc.data().contact
        age=doc.data().age
        emergencyContact=doc.data().emergencyContact
        emergencyContact2=doc.data().emergencyContact2
    })
    this.setState({
        name:userName,
        contact:contact,
        age:age,
        emergencyContact:emergencyContact,
        emergencyContact2:emergencyContact2,
    })
    }
}
    render(){
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
     <ScrollView>
     <Text style={{marginTop:5,
    marginLeft: 22,
     fontWeight: 'bold',
     fontStyle: "italic",
    fontSize: 30,
    justifyContent:"center",alignItems:"center",
    color:"black"}}>Profile Screen</Text>        
        <Text style={{marginTop:30,color:"black",fontSize: 30,}}>{this.state.name}</Text>  
        <Text style={{marginTop:30,color:"black",fontSize: 30,}}>{this.state.age}</Text> 
         <Text style={{marginTop:30,color:"black",fontSize: 30,}}>{this.state.contact}</Text> 
       <Text style={{marginTop:30,color:"black",fontSize: 30,}}>{this.state.emergencyContact}</Text> 
        <Text style={{marginTop:30,color:"black",fontSize: 30,}}>{this.state.emergencyContact2}</Text> 
</ScrollView>
</View>
       
    
    )
}
}









