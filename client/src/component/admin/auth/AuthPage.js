import React, {useContext, useEffect, useState} from 'react'

import {useHttp} from '../../../hooks/http.hook'
import {AuthContext} from '../../../context/AuthContext'

import './AuthPage.sass'

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const {loading, request} = useHttp()
  const [form, setForm] = useState({
    email: '', password: ''
  })

  
  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      console.log('Data:', data)
    } catch (e) {}
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      auth.login(data.token, data.userId)
    } catch (e) {}
  }

  return(
    <div className="auth">
      <div className="auth__data">
            <span className="auth__card-title title">Authorization</span>
              <div className="auth__input-field">
                <input
                  placeholder="Enter email"
                  id="email"
                  type="text"
                  name="email"
                  className="auth__input"
                  value={form.email}
                  onChange={changeHandler}
                />
                
              </div>

              <div className="auth__input-field">
                <input
                  placeholder="Enter password"
                  id="password"
                  type="password"
                  name="password"
                  className="auth__input"
                  value={form.password}
                  onChange={changeHandler}
                />
               
              </div>
          </div>
          <div className="auth__card-action ">
            {/* <button
              className="auth__button button"
              disabled={loading}
              onClick={loginHandler}
            >
              Sign in
            </button> */}
            <button
              className="auth__button button"
              onClick={registerHandler}
              disabled={loading}
            >
              Register
            </button>
          </div>
    </div>
  )
}