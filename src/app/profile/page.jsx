'use client'

import useAuth from '@/hooks/useAuth'
import Button from '@/components/ui/Button'

export default function ProfilePage() {
  const { user, loading, logout } = useAuth()

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <span className="text-gray-500 text-sm">Loading profile...</span>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="text-center text-red-500">
        <p>Unable to load profile. Please login again.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome</h1>
        <p className="text-gray-600">You're logged in securely.</p>
      </div>

      <div className="space-y-2 text-sm text-gray-700">
        <p><span className="font-medium">Name:</span> {user.name || 'N/A'}</p>
        <p><span className="font-medium">Phone:</span> +91 {user.phone}</p>
        {user.email && <p><span className="font-medium">Email:</span> {user.email}</p>}
      </div>

      <Button variant="danger" onClick={logout}>
        Logout
      </Button>
    </div>
  )
}
