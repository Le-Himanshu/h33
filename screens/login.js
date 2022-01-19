import React, {Component} from "react";
import { Text,View,TouchableOpacity,TextInput,StyleSheet, Alert, KeyboardAvoidingView } from "react-native";
import db from "../config"
window.contact=""
export default class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      name:"",
      age:"",
      contact:"",
      emergencyContact:"",
      emergencyContact2:"",
    }
  }
storeData=async(name,age,contact,emergencyContact,emergencyContact2)=>{
db.collection("users").add({
  name:name,
  age:age,
  contact:contact,
  emergencyContact:emergencyContact,
  emergencyContact2:emergencyContact2
})
window.contact=this.state.contact
  Alert.alert("data added")
  console.log(window.contact)
}
render(){
    return(
        <KeyboardAvoidingView behavior = "padding" style={{flex:1,justifyContent:"center",alignItems:"center"}}>
     <Text>Login Screen</Text>
     <TextInput style={styles.TextInput} placeholder={"Enter Name"} onChangeText={text=>this.setState({name:text})}/>
     <TextInput style={[styles.TextInput,{marginTop:20}]} placeholder={"Enter Age"} onChangeText={text=>this.setState({age:text})}/>
     <TextInput style={[styles.TextInput,{marginTop:20}]} placeholder={"Enter Contact"}onChangeText={text=>this.setState({contact:text})}/>
     <TextInput style={[styles.TextInput,{marginTop:20}]} placeholder={"Enter Emergency Contact"}onChangeText={text=>this.setState({emergencyContact:text})}/>
     <TextInput style={[styles.TextInput,{marginTop:20}]} placeholder={"Enter Emergency Contact2"}onChangeText={text=>this.setState({emergencyContact2:text})}/>
     <TouchableOpacity style={styles.submitButton} onPress={()=>{
          this.storeData(this.state.name, this.state.age, this.state.contact, this.state.emergencyContact, this.state.emergencyContact2)
        this.props.navigation.navigate("homeScreen")}}><Text style={styles.submitButtonText}>Submit</Text></TouchableOpacity> 
        </KeyboardAvoidingView>
    )
}
}


const styles=StyleSheet.create({
    TextInput: {
        width: "57%",
        height: 50,
        padding: 10,
        borderColor: "#FFFFFF",
        borderRadius: 10,
        borderWidth: 3,
        fontSize: 18,
        backgroundColor: "#5653D4",
       
        color: "#FFFFFF"
      },
      submitButton: {
        width: "43%",
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F48D20",
        borderRadius: 15
      },
      submitButtonText: {
        fontSize: 24,
        color: "#FFFFFF",
      
      }
})






