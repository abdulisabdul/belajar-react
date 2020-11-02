import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Login() {
    const [username, setusername] = useState('')
    const getallreducer = useSelector(state => state)
    const statusLogin = useSelector(state => state.login)
    const dispatch = useDispatch()
    

    function _handleSubmit() {
        dispatch({type: 'LOGIN', payload: {username}})
        dispatch({type: 'GET_DATA_USER', payload: {username}})
    }
    return (
        <div>
            <div><input type="text" value={username} onChange={(e) => setusername(e.target.value)} /></div>
            <button onClick={_handleSubmit}>{statusLogin.isLogin ? 'Logout' : 'Login'}</button>
            <div>{JSON.stringify(getallreducer)}</div>
        </div>
    )
}
