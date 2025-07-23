// src/components/forms/OTPInput.jsx

import { useRef } from 'react'

export default function OTPInput({ otp, setOtp, length = 6 }) {
  const inputsRef = useRef([])

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, '')
    if (!value) return

    const newOtp = otp.split('')
    newOtp[index] = value
    setOtp(newOtp.join(''))

    // Focus next
    if (index < length - 1 && inputsRef.current[index + 1]) {
      inputsRef.current[index + 1].focus()
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const newOtp = otp.split('')
      if (newOtp[index]) {
        newOtp[index] = ''
        setOtp(newOtp.join(''))
      } else if (index > 0) {
        inputsRef.current[index - 1].focus()
      }
    }
  }

  return (
    <div className="flex justify-center gap-2">
      {[...Array(length)].map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          aria-label={`OTP Digit ${index + 1}`}
          value={otp[index] || ''}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-12 h-12 text-center border border-gray-300 rounded-lg text-xl font-medium text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      ))}
    </div>
  )
}
