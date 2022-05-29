import React from 'react'
import { FlatList } from 'react-native'
import ModelItem from './ModelItem'

const ModelsList = ({data, parentTitle, level, isSubTitleVisible}) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <ModelItem data={item} parentTitle={parentTitle} isSubTitleVisible={isSubTitleVisible} level={level}/>}>
        </FlatList>
    )
}

export default ModelsList