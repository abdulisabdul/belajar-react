import React from 'react'
import { useContext } from 'react'
import { ItemContext } from './ProviderHoc'

export default function Detail({ id, nama_barang, harga }) {
    const {dispatch} = useContext(ItemContext)
    return (
        <li className="list-group-item">
            {nama_barang} ({harga})
            <button className="btn btn-danger btn-sm float-right" onClick={() => dispatch({type: 'HAPUS_ITEM',payload : id})} >hapus</button>
        </li>
    )
}
