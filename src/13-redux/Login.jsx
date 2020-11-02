import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Login() {
    const [username, setusername] = useState('')
    const user = useSelector(state => state)
    const dispatch = useDispatch()

    function _handleSubmit() {
        dispatch({type: 'LOGIN', payload: {username}})
    }
    return (
        <div>
            <div><input type="text" value={username} onChange={(e) => setusername(e.target.value)} /></div>
            <button onClick={_handleSubmit}>{user.isLogin ? 'Logout' : 'Login'}</button>
            <div>{JSON.stringify(user)}</div>
        </div>
    )
}
