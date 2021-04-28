import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { colors } from '../Theme/AppColors'

const CustomBtn = (props)=>{
    const {label,onPress} = props
    return(
        <TouchableOpacity onPress = {onPress} style = {{backgroundColor:colors.bgColor,alignItems:'center',justifyContent:'center',alignSelf:'center',marginTop:responsiveHeight(4),width:responsiveWidth(90),borderRadius:10,height:responsiveHeight(8)}}>
                    <Text style = {{color:colors.txtColor,fontSize:responsiveFontSize(2.5)}}>{label}</Text>
        </TouchableOpacity>
    )
}

export default CustomBtn