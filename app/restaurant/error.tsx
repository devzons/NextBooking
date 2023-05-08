'use client'

import Image from 'next/image'

export default function error({ error }: { error: Error }) {
  return (
    <div className='h-screen bg-purple-800 flex flex-col justify-center items-center'>
      <Image
        src='/icons/error.png'
        width='300'
        height='150'
        alt='error image'
        className='mb-8'
      />
      <div className='bg-white px-9 py-14 shadow rounded'>
        <h2 className='text-3xl font-bold'>Well, this is embarrassing</h2>
        <p className='text-reg font-bold'>{error.message}</p>
        <p className='mt-6 text-sm font-light'>Error code: 400</p>
      </div>
    </div>
  )
}
