import { useFocusEffect, useIsFocused } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import CustomBtn from '../components/CustomBtn'
import InputText from '../components/InputText'
import { Sign_upAction } from '../Redux/Action'
import { colors } from '../Theme/AppColors'

const SignupScreen = ({navigation}) => {
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const isFocused = useIsFocused();
 
    const data = useSelector(state =>state.data)

    const SignUpMethod = ()=>{
        if(data.email === email && data.password === pass)
        {
            navigation.replace("Dashboard")
        }
        else{
            alert("Please enter valid credentials.")
        }
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.bgColor} />
            <View style={styles.headerStyle}>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")} style={{ marginRight: responsiveWidth(6) }}>
                    <Text style={styles.textStyle}>Sign In </Text>
                    {
                        isFocused && <View style = {{height:responsiveHeight(0.2),marginTop:responsiveHeight(0.5),backgroundColor:colors.txtColor}}/>
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                    <Text style={styles.textStyle}>Sign Up </Text>
                    {
                        !isFocused && <View style = {{height:responsiveHeight(0.2),marginTop:responsiveHeight(0.5),backgroundColor:colors.txtColor}}/>
                    }
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: responsiveHeight(10), marginLeft: responsiveWidth(5) }}>
                <Text style={{ fontSize: responsiveFontSize(4), color: colors.txtColor }}>Hey, get on board</Text>
                <Text style={{ color: colors.txtColor, marginTop: responsiveHeight(1) }}>Sign in to continue</Text>
            </View>

            <View style={styles.inputAreaStyle}>
                 <InputText label="Email Address"  onchangeText = {(email)=>setEmail(email)} />
                 <InputText label="Password" onchangeText = {(pass)=>setPass(pass)} />
                 <CustomBtn label = "Sign In" onPress = {()=>SignUpMethod()}/> 
                 <Text style = {{alignSelf:'center',fontSize:responsiveFontSize(2),marginTop:responsiveHeight(1)}}>or you can also</Text>
                 <CustomBtn label = "Sign In with Google"/>
            </View>
            
        </View>
    )
}



export default SignupScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,

    },
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: responsiveHeight(2),
        marginRight: responsiveWidth(5)

    },
    textStyle: {
        fontSize: responsiveFontSize(2),
        color: colors.txtColor

    },
    inputAreaStyle: {
        flex: 1,
        borderTopLeftRadius: 30,
        marginTop: responsiveHeight(5),
        backgroundColor: colors.txtColor,
        borderTopRightRadius: 30,
        paddingHorizontal:responsiveWidth(5)
    }
})