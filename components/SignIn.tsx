import { SignInButton } from '@clerk/nextjs'
import React from 'react'

function SignIn() {
  return (
    <SignInButton mode="modal">
      <button className="text-sm font-semibold hover:text-dark text-light hover:cursor-pointer hoverEffect">
        Login
      </button>
    </SignInButton>
  );
}

export default SignIn
