'use client'

import Loader from '@/components/ui/Loader'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/login')
  }, [])

  return (
    <div className="flex justify-center items-center h-screen">
      <Loader size="lg" />
    </div>
  )
}
