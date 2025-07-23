// src/components/ui/Button.jsx

'use client'
import Loader from './Loader'
import classNames from 'classnames'

export default function Button({
  children,
  onClick,
  type = 'button',
  loading = false,
  disabled = false,
  variant = 'primary',
  fullWidth = true,
  className = '',
}) {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none'

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }

  const size = 'px-4 py-2 text-sm'

  const finalClass = classNames(
    baseClasses,
    variants[variant],
    size,
    {
      'w-full': fullWidth,
      'opacity-50 cursor-not-allowed': disabled || loading,
    },
    className
  )

  return (
    <button
      type={type}
      className={finalClass}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? (
        <>
          <Loader size="sm" className="mr-2" />
          Processing...
        </>
      ) : (
        children
      )}
    </button>
  )
}