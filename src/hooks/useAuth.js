// src/hooks/useAuth.js

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getToken, setToken, removeToken } from '@/utils/tokens'
import toast from 'react-hot-toast'

export default function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = getToken()
    if (!token) {
      setLoading(false)
      return
    }

    // Simulate fetching profile with a delay
    setTimeout(() => {
      setUser({
        name: 'Mock User',
        phone: '9876543210',
        email: 'mock@user.com',
      })
      setLoading(false)
    }, 800)
  }, [])

  const login = (token) => {
    setToken(token)
    toast.success('Login successful!')
    router.push('/profile')
  }

  const logout = () => {
    removeToken()
    toast.success('Logged out')
    router.push('/login')
  }

  const isAuthenticated = () => !!getToken()

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated,
  }
}