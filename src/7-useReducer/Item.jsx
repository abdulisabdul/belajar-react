import React from 'react'
import { useContext } from 'react'
import Detail from './Detail'
import { ItemContext } from './Provider'

export default function Item() {
    const { listItems } = useContext(ItemContext)
    console.log(1)
    return (
        <ul className="list-group mt-3">
            {listItems.item.map((data) => {
                return (
                    <Detail key={data.id} {...data} />
               )
           })} 
        </ul>
    )
}
