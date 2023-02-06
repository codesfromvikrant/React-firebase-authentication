import React, { useState } from 'react'


// Components
import RegisterUser from './RegisterUser'
import LoginUser from './LoginUser';

export default function User({ auth, createUserWithEmailAndPassword, signInWithEmailAndPassword }) {
  const initialAuth = {
    email: '',
    password: '',
    confirmPassword: '',
    userVerified: false
  }
  const [authInput, setAuthInput] = useState(initialAuth);
  const [authPage, setAuthPage] = useState(1);

  const handleInput = (event) => {
    const { name, value } = event.target
    event.preventDefault();
    setAuthInput(prevInput => {
      return (
        {
          ...prevInput,
          [name]: value
        }
      )
    })
  }



  const registrationSubmit = (event) => {
    event.preventDefault()
    if (authInput.password === authInput.confirmPassword) {
      createUserWithEmailAndPassword(auth, authInput.email, authInput.password)
        .then((userCredential) => {
          // Signed in 
          //const user = userCredential.user;
          console.log(userCredential)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorMessage)
        });
    }

    setAuthInput({
      ...initialAuth,
      userVerified: true
    })
  }

  const loginSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, authInput.email, authInput.password)
      .then((userCredential) => {
        // Signed in 
        console.log(userCredential)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
      });

    setAuthInput({
      ...initialAuth,
      userVerified: true
    })
  }

  const handleAuthPage = () => {
    setAuthPage(!authPage)
    console.log(authPage)
  }

  console.log(authInput.email)

  return (
    <>
      {authPage
        ? (<RegisterUser
          authInput={authInput}
          handleInput={handleInput}
          handleAuthPage={handleAuthPage}
          registrationSubmit={registrationSubmit}
        />)
        : (
          <LoginUser
            authInput={authInput}
            handleAuthPage={handleAuthPage}
            handleInput={handleInput}
            loginSubmit={loginSubmit}
          />
        )}
    </>
  )
}
