import React, { useState, useContext } from 'react'
import Item from './Item'
import BrandsList from './BrandsList'
import { Context } from '../context/ProductContext';
import { ALL } from '../constants'

const ProductItem = ({data}) => {
    const [show, setShow] = useState(false);
    const { addProduct, deleteProduct } = useContext(Context);
    
    didClickHandler = () => {
        setShow(!show)
    }

    didSelect = (id, title, isChecked) => {
        isChecked ? addProduct(id, title=ALL + ' ' + title) : deleteProduct(id)
    } 
    
    return (
        <>
            <Item 
                data={data}
                level={0}
                isSubTitleVisible={!show}
                didClickHandler={didClickHandler}
                didSelect={didSelect}>
            </Item>
            {
                !show ? null :
                <BrandsList
                    data={data.brands}
                    parentTitle={data.type}
                    level={1}>
                </BrandsList>
            }
        </>
    )
}

export default ProductItem