import { createContext } from 'react'
import React,{ useState } from 'react'
import {data} from '../data'

export const ItemContext = createContext()

export default function ItemProvider({children}) {
    const [item, setItem] = useState(data)
    const _hapusItem = (id) => {
        const newItem = item.filter((item) => item.id !== id)
        setItem(newItem)
    }

    const _tambahData = (newItem) => {
        setItem([newItem,...item])
    }

    return (
        <ItemContext.Provider value={{ item, _hapusItem, _tambahData }}>
            {children}
        </ItemContext.Provider>
    )
}
