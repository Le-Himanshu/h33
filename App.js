import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import Login from "./screens/login"
import HomeScreen from './screens/home';
import Feedback from './screens/feedback';
import Profile from './screens/profile';
import SOS from './screens/sos';
export default function App() {
  return (
<AppContainer/>
 );
}
var AppNavigator=createSwitchNavigator({
  loginScreen:Login,
  homeScreen:HomeScreen
})
const AppContainer=createAppContainer(AppNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
