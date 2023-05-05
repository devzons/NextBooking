'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [location, setLocation] = useState('')

  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <div className='max-w-screen-2xl m-auto bg-white'>
        {/* NAVBAR */}
        <nav className='bg-white p-2 flex justify-between'>
          <Link href='/' className='font-bold text-indigo-700 text-2xl'>
            <span className='font-thin'>
              Open<span className='font-semibold'>Booking</span>
            </span>
          </Link>
          <div>
            <div className='flex'>
              <button className='bg-indigo-600 hover:bg-indigo-500 text-white border p-1 px-4 rounded mr-3'>
                Sign in
              </button>
              <button className='border border-indigo-100 p-1 px-4 rounded hover:bg-indigo-100'>
                Sign up
              </button>
            </div>
          </div>
        </nav>
        {/* NAVBAR */}
        <main>
          {/* HEADER */}
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
          {/* HEADER */} {/* CARDS */}
          <div className='py-3 px-36 mt-10 flex flex-wrap justify-center'>
            {/* CARD */}
            <div className='w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer'>
              <Link href='/restaurant/milestones-grill'>
                <img
                  src='https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg'
                  alt=''
                  className='w-full h-36'
                />
                <div className='p-1'>
                  <h3 className='font-semibold text-2xl mb-2'>
                    Milestones Grill
                  </h3>
                  <div className='flex justify-start items-center'>
                    <div className='flex mb-2'>*****</div>
                    <p className='ml-2'>77 reviews</p>
                  </div>
                  <div className='flex text-reg font-light capitalize'>
                    <p className=' mr-3'>Mexican</p>
                    <p className='mr-3'>$$$$</p>
                    <p>Toronto</p>
                  </div>
                  <p className='text-sm mt-1 font-semibold'>
                    Booked 3 times today
                  </p>
                </div>
              </Link>
            </div>
            {/* CARD */}
          </div>
          {/* CARDS */}
        </main>
      </div>
    </main>
  )
}
