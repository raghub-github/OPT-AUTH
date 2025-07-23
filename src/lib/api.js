// src/lib/api.js

import axios from 'axios'
import toast from 'react-hot-toast'

// Create base Axios instance
const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Request interceptor: add token if available
api.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token')
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
        }
        return config
    },
    (error) => Promise.reject(error)
)

// Response interceptor: global error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error?.response?.status
        const message =
            error?.response?.data?.message ||
            error?.message ||
            'Server error. Please try again later.'

        // Optional: log to dev console
        console.error('[API ERROR]', {
            url: error?.config?.url,
            method: error?.config?.method,
            status,
            message,
        })

        if (status === 401) {
            toast.error('Session expired. Please login again.')
            localStorage.removeItem('token')

            if (typeof window !== 'undefined') {
                setTimeout(() => {
                    window.location.href = '/login'
                }, 1000)
            }
        } else {
            toast.error(message)
        }

        return Promise.reject(error)
    }
)

export default api
