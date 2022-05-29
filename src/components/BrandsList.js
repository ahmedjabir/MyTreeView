import React from 'react'
import { FlatList } from 'react-native'
import BrandsItem from './BrandsItem'

const BrandsList = ({data, parentTitle, level}) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <BrandsItem data={item} parentTitle={parentTitle} level={level}/>}>
        </FlatList>
    )
}

export default BrandsList