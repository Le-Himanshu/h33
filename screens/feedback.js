import React, {Component} from "react";
import { Text,View,TouchableOpacity,TextInput,ScrollView,Button,Alert} from "react-native";
import db from "../config"
export default class Feedback extends Component{
constructor(){
    super();
    this.state={
        feed:"",

    }
}
storeData=async(feed)=>{
    db.collection("feedbacks").add({
      feed:feed
    })
    Alert.alert("data added")
    }
    render(){
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#86c8fe"}}>
     <ScrollView>
     <Text style={{marginTop: 5,
    marginLeft: 22,
     fontWeight: 'bold',
     fontStyle: "italic",
    fontSize: 30,
    padding : 20,
    color:"#3154ff"}}>Feedback Screen</Text>
     <TextInput
     placeholder={"comment your experience"}
     multiline={true}
     numberOfLines={10}
     placeholderTextColor="black"
     onChangeText={text=>this.setState({feed:text})}
    />
     <View>
     <TouchableOpacity style={{ height:40,width:70,backgroundColor: 'orange',marginTop:20 , marginLeft:20 ,justifyContent:"center",alignItems:"center" }}>
          <Text style={{justifyContent:"center",alignItems:"center", fontWeight: 'bold',
     fontStyle: "italic",
    fontSize: 20,color:"black"}} onPress={()=>{
        this.storeData(this.state.feed)}}>Submit</Text>
        </TouchableOpacity>
     </View>
     </ScrollView>
        </View>
    )
}
}









