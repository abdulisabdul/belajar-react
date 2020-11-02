import React, { Fragment } from 'react'
// import FormComp from './FormComp'
import FormComp from './FormHandleInputDinamis'
import Item from './Item'
import ProviderHoc from './ProviderHoc'

function Hoc() {
    return (
        <Fragment >
            <h1>Use Reducer</h1> 
            <FormComp />
            <Item />
        </Fragment>
    )
}

export default ProviderHoc(Hoc)
