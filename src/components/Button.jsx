import React from 'react'

export const Button = ({ size, color, title, onClick }) => {
  const sizeClasses = {
    small: 'text-sm py-1 px-3',
    medium: 'text-base py-2 px-4',
    large: 'text-lg py-3 px-6'
  }

  const colorClasses = {
    primary: 'bg-[#00FF00] hover:bg-[#00E600] text-black',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white'
  }

  return (
    <button
      onClick={onClick}
      className={`rounded-lg font-medium transition-all ${sizeClasses[size]} ${colorClasses[color]}`}
    >
      {title}
    </button>
  )
}