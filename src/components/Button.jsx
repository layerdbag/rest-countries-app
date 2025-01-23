import React from 'react'

const Button = ({ text }) => {
  return (
    <button className='border-2 px-4 space-x-2 rounded-md shadow-xl'>
      {text}
    </button>
  )
}

export default Button