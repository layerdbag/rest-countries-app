import React from 'react'


const NavigateButton = ({ icon, text, handleClick, isDarkMode }) => {
  return (
    <button onClick={handleClick}
      className={`border-2 ${isDarkMode ? 'border-dark' : 'border-input-light'} flex items-center px-4 py-1 rounded-md shadow ${isDarkMode ? 'bg-dark-blue' : 'bg-font-dark'}
    ${isDarkMode ? 'text-font-dark' : 'text-dark-blue'} ${isDarkMode ? 'shadow-dark' : 'shadow-input-light'}`}>
      <span className='mt-1 mr-2'>{icon}</span>{text}
    </button>
  )
}

export default NavigateButton

