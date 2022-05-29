import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import CheckBox from './CheckBox'

const Item = ({data, isSubTitleVisible, didClickHandler, didSelect, level}) => {

    itemDidClick = () => {
        if (didClickHandler) {
            didClickHandler()
        }
    }

    return (
        <View style={[styles.container, {marginLeft:level * 20}]}>
            <CheckBox 
                data={data}
                didSelect={didSelect}>                    
            </CheckBox>
            <TouchableOpacity style={styles.button} onPress={itemDidClick}>
            <Text style={styles.title}>{data.title}</Text>
            { isSubTitleVisible ? <Text style={styles.subTitle}>{data.subTitle}</Text> : null}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:44,
        flexDirection:'row',
        alignItems:'center',
        marginVertical:0
    },
    title: {
        marginTop:0,
        marginLeft:5,
        fontWeight:'bold'
    },
    subTitle: {
        marginLeft:5,
        color:'gray'
    },
    button: {
        flex:1
    }
})

export default Item