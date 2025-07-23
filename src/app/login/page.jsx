'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import PhoneInput from '@/components/forms/PhoneInput'
import Button from '@/components/ui/Button'
import { isValidPhone } from '@/lib/validators'

export default function LoginPage() {
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSendOtp = async () => {
    if (!isValidPhone(phone)) {
      toast.error('Please enter a valid 10-digit phone number')
      return
    }

    setLoading(true)

    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Generate a random 6-digit OTP
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString()

      // Store OTP and phone in localStorage
      localStorage.setItem('otp', generatedOtp)
      localStorage.setItem('phone', phone)

      // Show OTP in toast (for demo only)
      toast.success(`OTP sent: ${generatedOtp}`)

      // Navigate to OTP page
      router.push('/otp')
    } catch (err) {
      toast.error('Failed to send OTP (mock)')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Login with Phone</h1>
        <p className="text-gray-500 text-sm">We'll send you a 6-digit OTP</p>
      </div>

      <PhoneInput phone={phone} setPhone={setPhone} />

      <Button onClick={handleSendOtp} loading={loading}>
        Send OTP
      </Button>
    </div>
  )
}
