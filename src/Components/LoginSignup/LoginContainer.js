import React from 'react'
import Login from './Login'
import Signup from './Signup'

export default function LoginContainer({page}) {
    return (
        <>
            <section className='w-full h-screen'>
                <section className={`w-full h-full flex items-center ${(page === 'login') ? 'bg-gradient-to-br from-indigo-300 via-violet-500 to-purple-800' : 'bg-gradient-to-tr from-fuchsia-500 via-purple-400 to-violet-400'}`}>
                    {page === 'login' ? <Login/> : <Signup/>}
                </section>
            </section>
        </>
    )
}
