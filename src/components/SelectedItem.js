import React from 'react'
import { Text, StyleSheet } from 'react-native'

const SelectedItem = ({item}) => {
    return (
        <Text style={styles.title}>{item.title}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        backgroundColor:'lightgray',
        color:'black',
        padding:5,
        margin:2,
    }
})

export default SelectedItem