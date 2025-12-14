import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

export const Button = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  className = '',
}: ButtonProps) => {
  const baseStyles =
    'px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    secondary: 'bg-slate-200 text-slate-700 hover:bg-slate-300 active:bg-slate-400',
    outline:
      'border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50',
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
