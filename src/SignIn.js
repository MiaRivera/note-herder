import React from 'react'

const SignIn = ({handleAuth}) => {
    return ( 
        <div className='signin'>
            <h1>SIGN IN</h1>
            <button onClick={handleAuth}>Sign In</button>
        </div>
    )
}

export default SignIn