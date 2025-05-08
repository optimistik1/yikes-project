import React from 'react'

export const Input = ({ 
  size = 'medium', 
  color = 'primary', 
  placeholder, 
  className = '',
  multiline = false,
  ...props 
}) => {
  const baseClasses = 'w-full rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00FF00] transition-all'
  
  const sizeClasses = {
    small: 'text-sm py-1.5 px-3',
    medium: 'text-base py-2.5 px-4',
    large: 'text-lg py-3 px-5'
  }
  
  const colorClasses = {
    primary: 'bg-gray-800 text-white placeholder-gray-400',
    secondary: 'bg-gray-700 text-white placeholder-gray-400',
    accent: 'bg-[#00FF00]/10 text-[#00FF00] placeholder-[#00FF00]/50'
  }

  return multiline ? (
    <textarea
      className={`${baseClasses} ${sizeClasses[size]} ${colorClasses[color]} ${className} min-h-[100px]`}
      placeholder={placeholder}
      {...props}
    />
  ) : (
    <input
      className={`${baseClasses} ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      placeholder={placeholder}
      {...props}
    />
  )
}

export default Input