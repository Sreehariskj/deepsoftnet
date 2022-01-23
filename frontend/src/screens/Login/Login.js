import React from 'react';
import './Login.css'

function Login() {


    return (
        <div className='container'>
         <form action=''>  
            <div className='card'>
                <h1>Login</h1>      
                <input type='email' className='inputField' placeholder='Email' 
                 ></input>
                <input type='password' className='inputField' placeholder='Password'
                 ></input>
                <button type='submit' className='button'>Login</button>
            </div>
         </form>
        </div>
    )
}

export default Login
