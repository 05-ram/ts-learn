import React, { useState } from 'react'

type AuthUser = {
    name: string;
    email: string;
}

const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null);

    const handleLogin = () => {
        setUser({
            name: 'Ram',
            email: 'abc@gmail.com'
        })
    }

    const handleLogout = () => {
        setUser(null)
    }
    return (
        <>
            <button onClick={handleLogin}>Login</button><br /> <br />
            <button onClick={handleLogout}>Logout</button> <br />
            <div>User Name is {user?.name}</div>
            <div>User Email is {user?.email}</div>
        </>
    )
}

export default User