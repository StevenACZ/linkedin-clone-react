import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import useForm from '../../customHooks/useForm'
import logoLinkedin from '../../images/linkedin.svg'
import { types } from '../../types/types'

export const LoginScreen = () => {

  const { dispatch } = useContext( AuthContext )

  const initialState = {
    email: '',
    password: ''
  }

  const [ formValues, handleInputChange, reset ] = useForm( initialState );

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        user: initialState
      }
    })

    reset()
  }
  
  const { email, password } = formValues;

  return (
    <div className="login-screen">
      <div className="login__content">
        <img className="login__logo" src={ logoLinkedin } />

        <form className="login__form">
          <h2>Sign in</h2>
          <p>Stay updated on your professional world</p>

          <div className="form__main">
            <label>
              <input
                type="text"
                name="email"
                value={ formValues.email }
                onChange={ handleInputChange }
              />
              <span
                className={ email.length > 0 ? 'active' : '' }
              >
                Email or Phone
              </span>
            </label>

            <label>
              <input
                type="password"
                name="password"
                value={ formValues.password }
                onChange={ handleInputChange }
              />
              <span
                className={ password.length > 0 ? 'active' : '' }
              >
                Password
              </span>
            </label>
          </div>

          <div className="form__forgot-password">
            <a className="link" href='/'>Forgot password?</a>
          </div>

          <button
            onClick={ handleLogin }
            className="form__btn-submit"
          >
            Sign in
          </button>
        </form>

        <div className="join-now">
          <p>New to LinkedIn? <a className="link" href='/'>Join now</a></p>
        </div>
      </div>
    </div>
  )
}
