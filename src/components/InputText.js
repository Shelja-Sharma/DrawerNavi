import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { colors } from '../Theme/AppColors';

const InputText = (props) => {
    const { label, onchangeText, keyboardtype,value ,multiline } = props;

    return (
        <View style={{marginTop: responsiveHeight(2) }}>
            <Text style={styles.textStyle}>{label}</Text>
            <TextInput style={styles.textinputStyle}   
                onChangeText={onchangeText}
                clearTextOnFocus={true}
                clearButtonMode = "always"
                keyboardType={keyboardtype ? 'numeric' : 'default'}
                multiline = {multiline}     
            />
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({
    textStyle: {
        fontSize: responsiveFontSize(2),
        color:colors.black,
        fontWeight:'bold'
    },
    textinputStyle: {
        elevation:1 ,
        paddingHorizontal: responsiveHeight(2),
        fontSize: responsiveFontSize(2),
        height: responsiveHeight(7),
        width: responsiveWidth(90),
        color:colors.black,
    }
})