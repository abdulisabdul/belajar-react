import React from 'react'
import { useContext } from 'react'
import Detail from './Detail'
import { ItemContext } from './Provider'

export default function Item() {
    const {item} = useContext(ItemContext)
    return (
        <ul className="list-group mt-3">
            {item.map((data) => {
                return (
                    <Detail key={data.id} {...data} />
               )
           })} 
        </ul>
    )
}
