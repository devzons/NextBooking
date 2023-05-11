import React from 'react'

export default function Description({ description }: { description: string }) {
  return (
    <div className='mt-4'>
      <p className='text-base font-light'>{description}</p>
    </div>
  )
}
