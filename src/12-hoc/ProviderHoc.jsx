import { createContext } from 'react'
import React from 'react'
import {data} from '../data'
import { useReducer } from 'react'

export const ItemContext = createContext()

export default function ProviderHoc(WrapComponent) {
    // const [item, setItem] = useState(data)
    // const _hapusItem = (id) => {
    //     const newItem = item.filter((item) => item.id !== id)
    //     setItem(newItem)
    // }

    // const _tambahData = (newItem) => {
    //     setItem([newItem,...item])
    // }

    const NewComponent = props => {
        const initialState = { item: data }
        const reducer = (state, action) => {
            switch (action.type) {
                case 'HAPUS_ITEM':
                    const newItem = state.item.filter((item) => item.id !== action.payload)
                    return { item: newItem }
                case 'TAMBAH_DATA':
                    return {item: [action.payload,...state.item]}
                default:
                    throw new Error()
            }
        }
    
        const [listItems, dispatch] = useReducer(reducer, initialState)
        return (
            <ItemContext.Provider value={{ listItems, dispatch }}>
                <WrapComponent {...props} />
            </ItemContext.Provider>
        )
    }

    return NewComponent

    
}
