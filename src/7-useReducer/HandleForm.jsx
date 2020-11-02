import React from 'react'
// import FormComp from './FormComp'
import FormComp from './FormHandleInputDinamis'
import Item from './Item'
import ItemProvider from './Provider'

export default function List() {
    return (
        <ItemProvider >
            <h1>Use Reducer</h1> 
            <FormComp />
            <Item />
        </ItemProvider>
    )
}
