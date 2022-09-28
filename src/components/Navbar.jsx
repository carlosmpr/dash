import React from 'react'

export default function Navbar() {
  return (
    <div className='bg-white w-full h-14 p-4 flex items-center justify-between '>
        <p className='font-bold text-xl'>D</p>
        <div className='flex  gap-x-12 h-full text-gray-500'>
            <p>Home</p>
            <p>About</p>
            <p>Features</p>
        </div>

        <div className='pt-2 pb-2 pl-4 pr-4 bg-blue-500 rounded-md text-white cursor-pointer'>
            Contact
        </div>
    </div>
  )
}
