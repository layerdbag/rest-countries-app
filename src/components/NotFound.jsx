import React from 'react'
import NavigateButton from './NavigateButton'
import { FaArrowLeft } from 'react-icons/fa'

const NotFound = ({ content, handleClick }) => {
  return (
    <div className='pt-16'>
      <div className='mb-20'>
        <NavigateButton
          icon={<FaArrowLeft />}
          text='Back'
          handleClick={handleClick}
        />
      </div>
      <div className='p-4 text-center bg-light shadow-xl'>
        <p className='text-2xl '>
          Sorry, there is no country with <span className='bg-dark text-font-dark'>{content}</span> numeric code!
        </p>
      </div>
    </div>
  )
}

export default NotFound