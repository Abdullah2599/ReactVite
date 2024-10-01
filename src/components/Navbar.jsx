import React from 'react'

function Navbar() {
  return (
    <div className='w-full bg-black flex justify-between px-20 py-5'>
        <div className='text-white text-xl font-semibold'>React Vite</div>
        <div className='text-white'>
            <ul className='flex-gap-4'>
                <li className='cursor-pointer hover:text-blue-200'>Home</li>
                <li className='cursor-pointer hover:text-blue-200'>Contact</li>
                <li className='cursor-pointer hover:text-blue-200'>About</li>

            </ul>
        
        </div>
      </div>
      

  )
}

export default Navbar
