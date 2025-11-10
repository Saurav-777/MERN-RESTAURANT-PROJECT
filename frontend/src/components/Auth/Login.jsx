import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await login(email, password)
      toast.success('Logged in successfully')
      navigate('/')
    } catch (err) {
      console.error(err)
      toast.error(err.message || 'Failed to login')
    }
  }

  return (
    <div className="authPage">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="authForm">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  )
}

export default Login
