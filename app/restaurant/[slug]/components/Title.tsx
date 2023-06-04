import React from 'react'

export default function Title({ name }: { name: string }) {
  return (
    <div className='mt-4 border-b pb-6'>
      <h1 className='font-bold text-2xl md:text-5xl capitalize'>{name}</h1>
    </div>
  )
}
