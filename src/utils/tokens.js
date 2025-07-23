// src/utils/tokens.js

const TOKEN_KEY = 'token'

/**
 * Store token in localStorage
 * @param {string} token
 */
export const setToken = (token) => {
    if (typeof window !== 'undefined' && token) {
        localStorage.setItem(TOKEN_KEY, token)
    }
}

/**
 * Get token from localStorage
 * @returns {string|null}
 */
export const getToken = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(TOKEN_KEY)
    }
    return null
}

/**
 * Remove token from localStorage
 */
export const removeToken = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(TOKEN_KEY)
    }
}