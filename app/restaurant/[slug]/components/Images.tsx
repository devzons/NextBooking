import React from 'react'

export default function Images({ images }: { images: Array<string> }) {
  return (
    <div>
      <h2 className='font-semibold text-3xl mt-10 mb-7 border-b pb-5'>
        {images.length} photo{images.length > 1 ? 's' : ''}
      </h2>
      <div className='flex flex-wrap'>
        {images.map((image, index) => (
          <img className='w-full md:w-52 h-auto md:h-44 mr-1 mb-1' src={image} alt={`image-${index + 1}`} />
        ))}
      </div>
    </div>
  )
}
