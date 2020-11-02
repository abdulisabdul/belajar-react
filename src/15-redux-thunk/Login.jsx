import React, { useState } from 'react'
import {
    // useDispatch,
    useSelector, useStore
} from 'react-redux'

export default function Login() {
    const [username, setusername] = useState('')
    const getallreducer = useSelector(state => state)
    const statusLogin = useSelector(state => state.login)
    // const dispatch = useDispatch()
    const store = useStore()

    function actionThunk() {
        return function (dispatch) {
            console.log(1);
            dispatch({ type: 'LOADING' })
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(responseJson => {
                    dispatch({ type: 'GET_USERS', payload: responseJson })
                })
                .catch((err) => {
                    dispatch({ type: 'ERROR', payload: err.message })
                    console.log(err.message);
                })
            console.log(2);
        }
    }


    // function _handleSubmit() {
    //     // dispatch({type: 'LOGIN', payload: {username}})
    //     // dispatch({type: 'GET_DATA_USER', payload: {username}})
    //     console.log(3);
    //     dispatch({ type: 'LOADING' })
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(responseJson => {
    //             dispatch({ type: 'GET_USERS', payload: responseJson })
    //         })
    //         .catch(err => dispatch({ type: 'ERROR', payload: err.message }))
    //     console.log(4);
    // }
    return (
        <div>
            <div><input type="text" value={username} onChange={(e) => setusername(e.target.value)} /></div>
            <button onClick={() => store.dispatch(actionThunk())}>{statusLogin.isLogin ? 'Logout thunk' : 'Login thunk'}</button>
            <div>
            {/* <button onClick={_handleSubmit}>{statusLogin.isLogin ? 'Logout' : 'Login'}</button> */}
            </div>
            <div>{JSON.stringify(getallreducer)}</div>
        </div>
    )
}
