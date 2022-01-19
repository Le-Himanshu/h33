import React, {Component} from "react";
import { Text,View,TouchableOpacity,TextInput } from "react-native";
import {createDrawerNavigator} from "@react-navigation/drawer"
import Profile from "../screens/profile";
import Help from "../screens/help";
import Feedback from "../screens/feedback";
import SOS from "../screens/sos";

const Drawer=createDrawerNavigator()

 const DrawerNavigator=()=>{
     return(
      <Drawer.Navigator>
       <Drawer.Screen name="Profile" component={Profile}/>   
       <Drawer.Screen name="Help" component={Help}/> 
       <Drawer.Screen name="Feedback" component={Feedback}/>  
       <Drawer.Screen name="SOS" component={SOS}/> 
      </Drawer.Navigator>
    )
     }
export default DrawerNavigator








