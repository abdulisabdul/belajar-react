import React from 'react'

export default function Detail({id,nama_barang,harga,hapus}) {
    return (
        <li className="list-group-item">
            {nama_barang} ({harga})
            <button className="btn btn-danger btn-sm float-right" onClick={() => hapus(id)}>hapus</button>
        </li>
    )
}
