// src/components/forms/PhoneInput.jsx

import React from 'react'

export default function PhoneInput({ phone, setPhone, label = 'Phone Number', autoFocus = true }) {
  return (
    <div className="w-full">
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
        <span className="px-3 text-gray-600 bg-gray-100 text-sm">+91</span>

        <input
          id="phone"
          type="tel"
          inputMode="numeric"
          pattern="[0-9]*"
          autoFocus={autoFocus}
          maxLength={10}
          placeholder="Enter 10-digit number"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))} // strip non-digits
          className="w-full px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none bg-white"
        />
      </div>
    </div>
  )
}
