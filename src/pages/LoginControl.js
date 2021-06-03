import React, { useState } from 'react'

function Greeting({ isLoggedIn }) {
  return (
    <>
      {
        isLoggedIn
        ? <h1>Welcome back!</h1>
        : <h1>Please sign in</h1>
      }
    </>
  )
}

function LoginButton({ onClick }) {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      LOGIN
    </button>
  )
}

function LogoutButton({ onClick }) {
  return (
    <button type="button" className="btn btn-danger" onClick={onClick}>
      LOGOUT
    </button>
  )
}

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function handleLoginClick() {
    setIsLoggedIn(true)
  }

  function handleLogoutClick() {
    setIsLoggedIn(false)
  }

  return (
    <div>
      <iframe src={"https://ghostbin.co/paste/478wd"} title="code"></iframe>
      <Greeting isLoggedIn={isLoggedIn} />
      {
        isLoggedIn 
        ? <LogoutButton onClick={handleLogoutClick} />
        : <LoginButton onClick={handleLoginClick} />
      }
    </div>
  )
}
