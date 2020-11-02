import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { ItemContext } from './Provider'

export default function FormComp() {
    const { _tambahData } = useContext(ItemContext)
    const initialState = {nama_barang: '', harga: ''}
    const [formData, setFormData] = useState(initialState)

    const _handleSubmit = (e) => {
        e.preventDefault()
        // console.log(nama_barang + '--' + harga)
        const newItem = {
            id: new Date().getTime().toString(),
            nama_barang: formData.nama_barang,
            harga: formData.harga
        }
        _tambahData(newItem)
        setFormData(initialState)
    }

    const _handleChange = (e) => {
        const nama = e.target.name
        const value = e.target.value
        setFormData({...formData, [nama] : value})
    }
    
    return (
        <>
            <form onSubmit={_handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nama" >Nama Barang</label>
                    <input type="text" name="nama_barang" value={formData.nama_barang} className="form-control" onChange={_handleChange} />
                    <small className="form-text text-muted">
                        
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="nama" >Harga Barang</label>
                    <input type="text" name="harga" value={formData.harga} className="form-control" onChange={_handleChange} />
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
