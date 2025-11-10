import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signup(email, password, name)
      toast.success('Account created')
      navigate('/')
    } catch (err) {
      console.error(err)
      toast.error(err.message || 'Failed to create account')
    }
  }

  return (
    <div className="authPage">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="authForm">
        <input type="text" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Create account</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  )
}

export default Signup
