import React from 'react'

export default function Questions({ handleInput, input }) {
  return (
    <div className='bg-white rounded-md max-w-3xl mx-auto my-10 shadow p-8'>
      <div className="">
        <label htmlFor="" className='text-gray-800 font-semibold'>
          Your Message:
        </label>
        <textarea value={input.message} onChange={handleInput} name='message' className='border-gray-200 border-2 rounded py-2 px-4 w-full' placeholder='Enter Your Full Name' required></textarea>
      </div>
    </div>
  )
}
