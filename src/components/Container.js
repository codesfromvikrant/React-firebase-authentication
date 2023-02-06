import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

// Components
import Detail from './Detail';
import Questions from './Questions';

const Container = ({ writeUserData }) => {
  const initialInput = {
    id: uuidv4(),
    name: '',
    email: '',
    phonenumber: '',
    message: '',
    isSubmitted: false
  }

  const [input, setInput] = useState(initialInput)

  console.log(input.id)
  const handleInput = (event) => {
    const { name, value } = event.target;

    event.preventDefault();
    setInput(prevInput => {
      return (
        {
          ...prevInput,
          [name]: value
        }
      )
    })
  }

  console.log(writeUserData)
  const submitHandler = (event) => {
    event.preventDefault()
    writeUserData(input.id, input.name, input.email)
    setInput(prevInput => ({
      ...prevInput,
      isSubmitted: true
    }))
  }

  return (
    <>
      <h1 className='text-center text-4xl text-gray-700 font-bold mt-12'>Questions Survey Form</h1>
      <form onSubmit={submitHandler}>
        {input.isSubmitted && <h3 className='text-center text-gray-800 font-semibold my-4'>Thanks for Submitting this Form.</h3>}
        {!input.isSubmitted && <Detail
          handleInput={handleInput}
          input={input}
        />}
        {!input.isSubmitted && <Questions
          handleInput={handleInput}
          input={input}
        />}
        {!input.isSubmitted && <div className="flex justify-center items-center">
          <input type="submit" value='Submit' className='bg-blue-600 text-white font-normal py-2 px-6 rounded' />
        </div>}
      </form>
    </>
  )
}

export default Container