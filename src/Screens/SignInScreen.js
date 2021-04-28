import { useIsFocused } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useDispatch } from 'react-redux'
import CustomBtn from '../components/CustomBtn'
import InputText from '../components/InputText'
import { Sign_upAction } from '../Redux/Action'
import { colors } from '../Theme/AppColors'

const SignInScreen = ({ navigation }) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const isFocused = useIsFocused();
    const dispatch = useDispatch()

    const SignUpMethod = () => {
        if (username != '' && email != '' && pass != '') {
            var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/; 
            if (email.match(mailformat)) {
                alert("You have entered a valid email address!");    //The pop up alert for a valid email address
                //document.form1.text1.focus();
                //return true;
            }
            else {
                alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
                //document.form1.text1.focus();
                return false;
            }
            const SignUpData = {
                userName: username,
                email: email,
                password: pass
            }
            dispatch(Sign_upAction(SignUpData))
            alert("Sign In successfully")
            navigation.replace("SignUp")
        }

    }


    const validateEmail = (inputText) => {
        var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
        if (inputText.value.match(mailformat)) {
            alert("You have entered a valid email address!");    //The pop up alert for a valid email address
            //document.form1.text1.focus();
            return true;
        }
        else {
            alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
            //document.form1.text1.focus();
            return false;
        }

    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.bgColor} />
            <View style={styles.headerStyle}>
                <TouchableOpacity onPress={() => navigation.replace("SignUp")} style={{ marginRight: responsiveWidth(6) }}>
                    <Text style={styles.textStyle}>Sign In </Text>
                    {
                        !isFocused && <View style={{ height: responsiveHeight(1), backgroundColor: colors.txtColor }} />
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.replace("SignIn")}>
                    <Text style={styles.textStyle}>Sign Up </Text>
                    {
                        isFocused && <View style={{ height: responsiveHeight(0.2), marginTop: responsiveHeight(0.5), backgroundColor: colors.txtColor }} />
                    }
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: responsiveHeight(10), marginLeft: responsiveWidth(5) }}>

                <Text style={{ fontSize: responsiveFontSize(4), color: colors.txtColor }}>Welcome back,</Text>
                <Text style={{ color: colors.txtColor, marginTop: responsiveHeight(1) }}>Sign up to continue</Text>
            </View>

            <ScrollView style={styles.inputAreaStyle}>
                <InputText label="Username" onchangeText={(username) => setUsername(username)} />
                <InputText label="Email Address"  onchangeText = {(email)=>setEmail(email)} />
                {/* <InputText label="Email Address" onchangeText={(email) => setEmail(validateEmail(email))} /> */}
                <InputText label="Password" onchangeText={(pass) => setPass(pass)} />
                <CustomBtn label="Sign Up" onPress={() => SignUpMethod()} />
                <Text style={{ alignSelf: 'center', fontSize: responsiveFontSize(2), marginTop: responsiveHeight(1) }}>or you can also</Text>
                <CustomBtn label="Sign Up with Google" />
            </ScrollView>

        </View>
    )
}



export default SignInScreen

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
        paddingHorizontal: responsiveWidth(5)
    }
})