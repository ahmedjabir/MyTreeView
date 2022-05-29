import React, { useState, useContext } from 'react'
import Item from './Item'
import VariantsList from './VariantsList'
import { Context } from '../context/ProductContext';
import { ALL } from '../constants'

const ModelItem = ({data, parentTitle, level}) => {
    const [show, setShow] = useState(false);
    const { addProduct, deleteProduct } = useContext(Context);

    didClickHandler = () => {
        setShow(!show)
    }

    didSelect = (id, title, isChecked) => {
        isChecked ? addProduct(id, title=ALL + ' ' + title + ' ' + parentTitle) : deleteProduct(id)
    }
    
    return (
        <>
            <Item 
                data={data} 
                isSubTitleVisible={!show} 
                level={level} 
                didClickHandler={didClickHandler} 
                didSelect={didSelect}>
            </Item>
            {
                !show ? null :
                <VariantsList
                    data={data.variants}
                    parentTitle={data.title}
                    isSubTitleVisible={show}
                    level={level+1}>                        
                </VariantsList>
            }            
        </>
    )
}

export default ModelItem