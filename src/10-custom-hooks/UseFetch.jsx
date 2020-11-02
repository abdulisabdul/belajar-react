
import { useEffect } from 'react'
import { useState } from 'react'

export function useFetch(url,option) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(url, option)
            const responseJson = await response.json()
            setData(responseJson)
            setLoading(false)
        }
        getData()

    },[url])

    return {loading, data}
}
