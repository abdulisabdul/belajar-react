import React from 'react'
import { useContext } from 'react'
import { ItemContext } from './Provider'

export default function Detail({ id, nama_barang, harga }) {
    const {_hapusItem} = useContext(ItemContext)
    return (
        <li className="list-group-item">
            {nama_barang} ({harga})
            <button className="btn btn-danger btn-sm float-right" onClick={() => _hapusItem(id)} >hapus</button>
        </li>
    )
}
