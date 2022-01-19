import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from '../navigation/drawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Component } from 'react/cjs/react.production.min';

export default class HomeScreen extends Component{
    render(){
        return (
                        <NavigationContainer>
                <DrawerNavigator/>
            </NavigationContainer> 
                
                );
     }
  }
