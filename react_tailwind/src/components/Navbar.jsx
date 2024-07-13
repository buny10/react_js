import React from 'react'

export default function Navbar() {
  return (
    <div  className='flex p-5 justify-between shadow-md'>
        <div className='text-blue-600  font-bold text-3xl '>Buzzboosters</div>
         
         <button className='px-4 py-2 bg-blue-500 text-white rounded-full  '>Login </button>
    </div>
  )
}
