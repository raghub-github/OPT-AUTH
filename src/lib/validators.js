// src/lib/validators.js

/**
 * Validates a 10-digit Indian phone number (no +91 prefix expected)
 * @param {string} phone
 * @returns {boolean}
 */
export function isValidPhone(phone) {
  const phoneRegex = /^[6-9]\d{9}$/
  return phoneRegex.test(phone)
}

/**
 * Validates that OTP is exactly 6 digits
 * @param {string} otp
 * @returns {boolean}
 */
export function isValidOTP(otp) {
  const otpRegex = /^\d{6}$/
  return otpRegex.test(otp)
}
