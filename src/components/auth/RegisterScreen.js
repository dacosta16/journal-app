import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const { msgError } = useSelector( state => state.ui );

  const [ formValues, handleInputChange ] = useForm({
    name: '',
    email: '',
    password: '',
    password2: ''

  })

  const { name, email, password, password2 }= formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if(isFormValid() ) {
      dispatch( startRegisterWithEmailPasswordName(email, password, name) );
    }

  }

  const isFormValid = () => {
    
    if(name.trim().length === 0) {
      dispatch( setError('Name is required') );
      // console.log('Name is required');
      return false;
    } else if ( !validator.isEmail( email ) ) {
      dispatch( setError('email is not valid') );
      // console.log('email is not valid');
      return false;
    } else if ( password !== password2 || password.length < 5) {
      dispatch( setError('Password should be at least 6 characters and match each other') );
      // console.log('Password should be at least 6 characters and match each other');
      return false;
    }

    dispatch( removeError() );

    return true;


  }


  return (
    <>
        
    <h3 className='auth__title'>Register</h3>

    <form className='animate__animated animate__fadeIn animate__faster'>

      {
        msgError &&
        (<div className='auth__alert-error'> 
          { msgError }
        </div>)
      }
      
      <input 
        type='text'
        placeholder='Name'
        name='name'
        autoComplete='off'
        className='auth__input'
        value={ name }
        onChange={ handleInputChange }
      />

      <input 
        type='text'
        placeholder='email@mail.com'
        name='email'
        autoComplete='off'
        className='auth__input'
        value={ email }
        onChange={ handleInputChange }
      />

      <input 
        type='password'
        placeholder='Password'
        name='password'
        className='auth__input'
        value={ password }
        onChange={ handleInputChange }
      />
            
      <input 
        type='password'
        placeholder='Confirm Password'
        name='password2'
        className='auth__input'
        value={ password2 }
        onChange={ handleInputChange }
      />

      <button className='btn btn-primary btn-block mb-5' type='submit' onClick={ handleRegister }>
        Register
      </button>

      <Link className='link' to='/auth/login'>Already registered?</Link>


    </form>
    
</>
    
  )
}
