import React from 'react'

export default function Detail({ handleInput, input }) {

  return (
    <div className="bg-white rounded-md max-w-3xl mx-auto my-10 shadow-md p-8" >
      <div className="">
        <label htmlFor="" className='text-gray-800 font-semibold'>
          Name :
        </label>
        <input value={input.name} onChange={handleInput} name='name' type="text" className='border-gray-200 border-2 rounded py-2 px-4 w-full' placeholder='Enter Your Full Name' required />
      </div>

      <div className="mt-3">
        <label htmlFor="" className='text-gray-800 font-semibold'>
          Email :
        </label>
        <input value={input.email} onChange={handleInput} name='email' type="email" className='border-gray-200 border-2 rounded py-2 px-4 w-full' placeholder='Enter Your  Email ID' required />
      </div>

      <div className="mt-3">
        <label htmlFor="" className='text-gray-800 font-semibold'>
          Phone Number :
        </label>
        <input value={input.phonenumber} onChange={handleInput} name='phonenumber' type="text" className='border-gray-200 border-2 rounded py-2 px-4 w-full' placeholder='Enter Your  Phone Number' required />
      </div>
    </div >
  )
}
