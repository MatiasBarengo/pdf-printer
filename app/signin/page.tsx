'use client'

import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import { useState } from 'react';

export default function SignInPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <div className="flex gap-4 mb-6">
          <button 
            className={`px-4 py-2 rounded ${isSignIn ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setIsSignIn(true)}
          >
            Iniciar Sesión
          </button>
          <button 
            className={`px-4 py-2 rounded ${!isSignIn ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setIsSignIn(false)}
          >
            Registrarse
          </button>
        </div>
        {isSignIn ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
} 