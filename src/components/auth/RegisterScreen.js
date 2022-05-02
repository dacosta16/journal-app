import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    
    <>
        
    <h3 className='auth__title'>Register</h3>

    <form>
      
      <input 
        type='text'
        placeholder='Name'
        name='name'
        autoComplete='off'
        className='auth__input'
      />

      <input 
        type='text'
        placeholder='email@mail.com'
        name='email'
        autoComplete='off'
        className='auth__input'
      />

      <input 
        type='text'
        placeholder='Password'
        name='password'
        className='auth__input'
      />
            
      <input 
        type='text'
        placeholder='Confirm Password'
        name='password2'
        className='auth__input'
      />

      <button className='btn btn-primary btn-block mb-5' type='submit'>
        Register
      </button>

      <Link className='link' to='/auth/login'>Already registered?</Link>


    </form>
    
</>
    
  )
}
