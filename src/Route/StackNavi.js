import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../Screens/SignUpScreen';
import SignInScreen from '../Screens/SignInScreen';
import Dashboard from '../Screens/Dashboard';
import TabNavi from './TabNavi';

const Stack = createStackNavigator()

const StackNavi = ()=>{
    
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode = {false} initialRouteName = "SignIn">
                <Stack.Screen name = "SignUp" component = {SignupScreen} />
                <Stack.Screen name = "SignIn" component = {SignInScreen} />
                <Stack.Screen name = "Dashboard" component = {Dashboard}/>
                {/* <Stack.Screen name = "TabNavi" component = {TabNavi} /> */}
              
            </Stack.Navigator>
        </NavigationContainer>

    )
}



export default StackNavi