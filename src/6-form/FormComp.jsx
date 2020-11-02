import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { ItemContext } from './Provider'

export default function FormComp() {
    const { _tambahData } = useContext(ItemContext)

    const [nama_barang, setNamaBarang] = useState('')
    const [harga,setHarga] = useState('')

    const _handleSubmit = (e) => {
        e.preventDefault()
        console.log(nama_barang + '--' + harga)
        const newItem = {
            id: new Date().getTime().toString(),
            nama_barang,
            harga
        }
        _tambahData(newItem)
        setNamaBarang('')
        setHarga('')
    }
    
    return (
        <>
            <form onSubmit={_handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nama" >Nama Barang</label>
                    <input type="text" name="nama_barang" value={nama_barang} className="form-control" onChange={(e) => setNamaBarang(e.target.value)} />
                    <small className="form-text text-muted">
                        
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="nama" >Harga Barang</label>
                    <input type="text" name="harga" value={harga} className="form-control" onChange={(e) => setHarga(e.target.value)} />
                    <small className="form-text text-muted">
                        
                    </small>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            {/* <ul className="list-group mt-3">
                <li className="list-group-item">a</li>
                <li className="list-group-item">a</li>
            </ul> */}
        </>
    )
}
