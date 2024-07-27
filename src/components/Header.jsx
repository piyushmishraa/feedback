import React from 'react'

const Header = () => {
  return (
    <div className='flex  justify-begin items-center m-0'>
        <span className='px-5 py-1 rounded-xl hover:border-2 hover:border-customBorder text-customFont hover:font-semibold  '>English</span>
        <span className='px-5 py-1 rounded-xl hover:border-2 hover:border-customBorder text-customFont hover:font-semibold'>Deutsch</span>
        <span className='px-5 py-1 rounded-xl hover:border-2 hover:border-customBorder text-customFont hover:font-semibold'>Français</span>
        <span className='px-5 py-1 rounded-xl hover:border-2 hover:border-customBorder text-customFont hover:font-semibold'>Español</span>
    </div>

  )
}

export default Header