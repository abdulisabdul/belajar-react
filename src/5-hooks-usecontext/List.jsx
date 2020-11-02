import React,{ useState } from 'react'
import {data} from '../data'
import Item from './Item'
import { ItemContext } from './Provider'

export default function List() {
    const [item, setItem] = useState(data)
    const _hapusItem = (id) => {
        const newItem = item.filter((item) => item.id !== id)
        setItem(newItem)
    }

    return (
        <ItemContext.Provider value={{ item, _hapusItem }}>
            <h1>Lempar props</h1> 
            <Item />
        </ItemContext.Provider>
    )
}
