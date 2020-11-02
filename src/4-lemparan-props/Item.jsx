import React from 'react'
import Detail from './Detail'

export default function Item({data, hapus}) {
    return (
        <ul className="list-group">
            {data.map((data) => {
                return (
                    <Detail key={data.id} {...data} hapus={hapus} />
               )
           })} 
        </ul>
    )
}
