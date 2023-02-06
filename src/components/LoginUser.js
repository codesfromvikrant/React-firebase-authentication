import React from "react";

export default function LoginUser({ authInput, handleAuthPage, handleInput, loginSubmit }) {
  return (
    <>
      <form onSubmit={loginSubmit} className="w-1/3 mt-12 mx-auto bg-white border-2 border-gray-200 p-10 rounded-md">
        <h3 className='text-gray-800 font-bold text-2xl'>User Log In</h3>
        <div className="mt-3">
          <label htmlFor="" className='text-gray-800 font-semibold'>
            Email Id :
          </label>
          <input value={authInput.email} onChange={handleInput} name='email' type="email" className='border-gray-200 border-2 rounded py-2 px-4 w-full' placeholder='Enter Your Email ID' required />
        </div>

        <div className="mt-3">
          <label htmlFor="" className='text-gray-800 font-semibold'>
            Password :
          </label>
          <input value={authInput.password} onChange={handleInput} name='password' type="password" className='border-gray-200 border-2 rounded py-2 px-4 w-full' placeholder='Enter Your Password' required />
        </div>

        <p className='text-sm text-gray-600 mt-3'>Create An Account? <span className='text-blue-500 font-medium cursor-pointer' onClick={handleAuthPage}>Sign Up</span></p>

        <div className=''>
          <input type="submit" value='Log In' className='bg-blue-600 text-white font-semibold w-max py-2 px-6 rounded mt-3 cursor-pointer hover:shadow-2xl' />
        </div>
      </form>
    </>
  )
}