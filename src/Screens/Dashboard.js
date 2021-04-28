import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { responsiveFontSize } from 'react-native-responsive-dimensions'
import { useDispatch } from 'react-redux'
import { LogOutAction } from '../Redux/Action'
import { colors } from '../Theme/AppColors'

const Dashboard =({navigation})=>{

    const dispatch = useDispatch();

    useEffect(()=>{
        console.log("dashboard useeffect")
})
    const LogoutMethod = ()=> {
        dispatch(LogOutAction())
        navigation.navigate("SignUp")
    }

    return(
        <View style = {{flex:1,backgroundColor:colors.bgColor,justifyContent:'center',alignItems:'center'}}>
            <Text style = {{color:colors.txtColor,fontSize:responsiveFontSize(2)}}>Dashboard</Text>
            {/* <TouchableOpacity onPress = {()=>LogoutMethod()}>
                <Text>Logout</Text>
            </TouchableOpacity> */}
        </View>
    )
}



export default Dashboard