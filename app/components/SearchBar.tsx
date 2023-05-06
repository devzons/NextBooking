'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const router = useRouter()
  const [location, setLocation] = useState('')

  return (
    <div className='text-left text-lg py-3 m-auto flex justify-center'>
      <input
        className='rounded  mr-3 p-2 w-[450px]'
        type='text'
        placeholder='State, city or town'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className='rounded border border-pink-500 bg-pink-800 hover:bg-pink-700 px-9 py-2 text-white drop-shadow-sm hover:drop-shadow-xl'
        onClick={() => {
          if (location === 'banana') return
          router.push('/search')
        }}
      >
        Let's go
      </button>
    </div>
  )
}
