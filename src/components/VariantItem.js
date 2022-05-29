import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Item from './Item'
import ModelsList from './ModelsList'

const BrandsItem = ({data, level}) => {
    const [show, setShow] = useState(false);
    
    didClickHandler = () => {
        setShow(!show)
    }
    
    return (
        <View>
            <Item data={data} isSubTitleVisible={!show} level={level} didClickHandler={didClickHandler}/>
            {
                show ? <ModelsList data={data.models} isSubTitleVisible={show} level={level + 1}/> : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
})

export default BrandsItem