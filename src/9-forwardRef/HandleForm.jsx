import React,{useState} from 'react'
// import FormComp from './FormComp'
import FormComp from './FormHandleInputDinamis'
import Item from './Item'
import ItemProvider from './Provider'

export default function List() {
    const [tambah, setTambah] = useState(false)
    return (
        <ItemProvider >
            <h1>UseRef</h1> 
            {
                tambah ? <FormComp /> :
                    <button className="btn btn-primary" onClick={() => setTambah(true)}>Tambah</button>
            }
            
            <Item />
        </ItemProvider>
    )
}
