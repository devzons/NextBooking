'use client'

import Link from 'next/link'
import AuthModal from './AuthModal'
import { useContext } from 'react'
import { AuthenticationContext } from '../context/AuthContext'
import useAuth from '../../hooks/useAuth'

export default function NavBar() {
  const { data, loading } = useContext(AuthenticationContext)
  const { signout } = useAuth()

  return (
    <nav className='bg-white p-2 flex flex-col md:flex-row justify-center md:justify-between'>
      <Link href='/' className='md:pl-1 flex items-center mx-auto md:mx-0'>
        <img src='/logo.svg' alt='logo' className='w-[35px] h-[35px]' />
        <span className='font-base text-lg pl-2'>
          Open<span className='font-bold'>Booking</span>
        </span>
      </Link>
      <div>
        {loading ? null : (
          <div className='flex justify-center mx-atuo md:mx-0 mt-2 md:mt-0 pl-3'>
            {data ? (
              <button className='bg-indigo-700 text-white border p-1 px-4 rounded mr-3' onClick={signout}>
                Sign out
              </button>
            ) : (
              <>
                <AuthModal isSignin={true} />
                <AuthModal isSignin={false} />
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
