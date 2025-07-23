'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { isValidOTP } from '@/lib/validators'
import OTPInput from '@/components/forms/OTPInput'
import Button from '@/components/ui/Button'
import useAuth from '@/hooks/useAuth'

export default function OTPPage() {
  const router = useRouter()
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()

  const [phone, setPhone] = useState('')
  useEffect(() => {
    const storedPhone = localStorage.getItem('phone')
    if (!storedPhone) {
      router.replace('/login')
    } else {
      setPhone(storedPhone)
    }
  }, [])

  const handleVerifyOTP = async () => {
    if (!isValidOTP(otp)) {
      toast.error('Enter a valid 6-digit OTP')
      return
    }

    setLoading(true)

    try {
      // Simulate backend delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Get the stored OTP
      const storedOtp = localStorage.getItem('otp')
      if (otp !== storedOtp) {
        throw new Error('Invalid OTP')
      }

      // Simulated successful login
      const fakeToken = 'mocked-jwt-token'
      login(fakeToken) // sets token + redirects to /profile

      // Optionally remove OTP after use
      localStorage.removeItem('otp')
    } catch (err) {
      toast.error(err.message || 'OTP verification failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Enter OTP</h1>
        <p className="text-gray-500 text-sm">
          We've sent a 6-digit code to <strong>+91 {phone}</strong>
        </p>
      </div>

      <OTPInput otp={otp} setOtp={setOtp} />

      <Button onClick={handleVerifyOTP} loading={loading}>
        Verify OTP
      </Button>
    </div>
  )
}
