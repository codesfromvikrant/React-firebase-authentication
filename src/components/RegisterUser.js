import React from 'react'

export default function RegisterUser({ authInput, handleInput, handleAuthPage, registrationSubmit }) {
  console.log(handleAuthPage)

  return (
    <>
      <form onSubmit={registrationSubmit} className='w-1/3 mt-12 mx-auto bg-white border-2 border-gray-200 p-10 rounded-md'>
        <h3 className='text-gray-800 font-bold text-2xl'>User Registration</h3>

        <div className="">
          <label htmlFor="" className='text-gray-800 font-semibold'>
            Email ID :
          </label>
          <input value={authInput.email} onChange={handleInput} name='email' type="text" className='border-gray-200 border-2 rounded py-2 px-4 w-full' placeholder='Enter Your Full Name' required />
        </div>

        <div className="mt-3">
          <label htmlFor="" className='text-gray-800 font-semibold'>
            Password :
          </label>
          <input value={authInput.password} onChange={handleInput} name='password' type="password" className='border-gray-200 border-2 rounded py-2 px-4 w-full' placeholder='Enter Your Full Name' required />
        </div>

        <div className="mt-3">
          <label htmlFor="" className='text-gray-800 font-semibold'>
            Confirm Password :
          </label>
          <input value={authInput.confirmPassword} onChange={handleInput} name='confirmPassword' type="password" className='border-gray-200 border-2 rounded py-2 px-4 w-full' placeholder='Enter Your Full Name' required />
        </div>

        <p className='text-sm text-gray-600 mt-3'>Already Registered? <span className='text-blue-500 font-medium cursor-pointer' onClick={handleAuthPage}>Log In</span></p>

        <div className='bg-blue-600 text-white font-semibold w-max py-2 px-6 rounded mt-3'>
          <input type="submit" value='Sign In' className='' />
        </div>
      </form>
    </>
  )
}
