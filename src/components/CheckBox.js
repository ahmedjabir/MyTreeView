import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'

const CheckBox = ({data, didSelect}) => {
    const [check, setCheck] = useState(false)

    checkBoxDidSelect = () => {
        setCheck(!check)   
        didSelect(data?.id, data?.title, !check)
    }

    return (
        <TouchableOpacity onPress={checkBoxDidSelect}>
            <View style={styles.check}>
                {check ? <Image style={styles.checkImage} source={require('../assets/check.png')}/> : null}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    check: {
        width:35,
        height:35,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:5,
        margin:5,
        alignItems:'center',
        justifyContent:'center'
    },
    checkImage: {
        width:20,
        height:20
    }
})

export default CheckBox