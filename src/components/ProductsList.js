import React from 'react'
import { FlatList } from 'react-native'
import ProductItem from './ProductItem'

const ProductsList = ({data, level}) => {
    return (
        <>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <ProductItem data={item} level={level}/>}>
            </FlatList>
        </>
    )
}

export default ProductsList


