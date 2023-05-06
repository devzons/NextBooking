'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()
  const [location, setLocation] = useState('')

  return (
    <div className='h-64 bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-500 p-2'>
      <div className='text-center mt-10'>
        <h1 className='text-white text-6xl font-md mb-2'>
          Find your table for any occasion
        </h1>
        {/* SEARCH BAR */}
        <div className='text-left text-lg py-3 m-auto flex justify-center'>
          <input
            className='rounded  mr-3 p-2 w-[450px]'
            type='text'
            placeholder='State, city or town'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button
            className='rounded bg-pink-900 hover:bg-pink-800 px-9 py-2 text-white'
            onClick={() => {
              if (location === 'banana') return
              router.push('/search')
            }}
          >
            Let's go
          </button>
        </div>
        {/* SEARCH BAR */}
      </div>
    </div>
  )
}
