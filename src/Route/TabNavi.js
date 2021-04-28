import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Dashboard from '../Screens/Dashboard'
import ProfileScreen from '../Screens/ProfileScreen'
import SettingScreen from '../Screens/SettingScreen'

const TabStack = createBottomTabNavigator()
const TabNavi = ()=>{
    return(
        <TabStack.Navigator>
            <TabStack.Screen name = "Dashboard" component = {Dashboard}/>
            <TabStack.Screen name = "Profile" component = {ProfileScreen}/>
            <TabStack.Screen name = "Setting" component = {SettingScreen}/>
                
        </TabStack.Navigator>
    )
}



export default TabNavi