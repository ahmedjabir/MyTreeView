import React, { useState, useContext } from 'react'
import Item from './Item'
import ModelsList from './ModelsList'
import { Context } from '../context/ProductContext';
import { ALL } from '../constants'

const BrandsItem = ({data, parentTitle, level}) => {
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
                <ModelsList
                    data={data.models}
                    parentTitle={parentTitle}
                    isSubTitleVisible={show}
                    level={level + 1}>
                </ModelsList>
            }
        </>
    )
}

export default BrandsItem