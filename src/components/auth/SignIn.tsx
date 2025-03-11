"use client"
import React, { useActionState } from 'react'
import Form from "next/form"
import { Loader2 } from 'lucide-react'

type Props = {
  action: (prevState: { message: string; } | undefined, formData: FormData) => Promise<{ message: string } | undefined>
}

const SignIn = ({ action }: Props) => {
  const [state, formAction, isPending] = useActionState(action, undefined)
  return (
    <Form action={formAction} className='p-8 max-w-md mx-auto my-16 bg-white rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold text-center mb-2'>
        Welcome back
      </h1>
      <p className='text-center text-sm text-rose-600 font-semibold mb-2'>
        MEMBER EXCLUSIVE
      </p>
      <p className='text-center text-sm text-gray-600 mb-2'>
        Sign in to access to exclusive deals
      </p>
      <div className='space-y-6'>
        {/* Email */}
        <div className='space-y-2'>
          <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email Adress</label>
          <input
            id='email'
            type="email"
            name='email'
            autoComplete='email'
            required
            className='w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors'
            placeholder='Enter your email'
          />
        </div>
        {/* Password */}
        <div className=''>
          <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
          <input
            id='password'
            type="password"
            name='password'
            autoComplete='new-password'
            required
            className='w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors'
            placeholder='Create your password'
          />
        </div>
        {/* Copywriting */}
        <div className='text-center'>
          <p className='text-xs text-gray-500 mb-2'>
            Members save an extra 15% on all orders
          </p>
          <p className='text-xs text-gray-500 mb-2'>
            Plug get free shipping on orders over 15$
          </p>
        </div>
        {/* Submit */}
        <button
          type='submit'
          disabled={isPending}
          className={`w-full bg-rose-600 text-white py-3 rounded-md hover:bg-rose-700 transition-colors font-medium flex justify-center items-center gap-2 ${isPending ? 'cursor-not-allowed' : ''}`}
        >
          {
            isPending ? (
              <>
                <Loader2 className='animate-spin h-4 w-4' />
                SIGNING IN...
              </>
            ) : (
              'SIGN IN'
            )
          }
        </button>
        {
          state?.message && state.message.length > 0 && (
            <p className='text-center text-sm text-red-600'>
              {state.message}
            </p>
          )
        }
      </div>
    </Form>
  )
}

export default SignIn