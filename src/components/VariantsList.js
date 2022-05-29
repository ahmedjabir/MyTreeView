import React, { useContext } from 'react'
import { FlatList } from 'react-native'
import Item from './Item'
import { Context } from '../context/ProductContext';

const VariantsList = ({data, parentTitle, level, isSubTitleVisible}) => {

    const { addProduct, deleteProduct } = useContext(Context);

    didSelect = (id, title, isChecked) => {
        isChecked ? addProduct(id, title=parentTitle + ', ' + title) : deleteProduct(id)
    }

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Item data={item} level={level} isSubTitleVisible={isSubTitleVisible} didSelect={didSelect}/>}>
        </FlatList>
    )
}

export default VariantsList