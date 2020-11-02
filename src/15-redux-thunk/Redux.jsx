import React from 'react'
import Login from './Login'
import UserProvider from './UserProvider'

export default function Redux() {
    return (
        <UserProvider>
            <Login />
        </UserProvider>
    )
}


