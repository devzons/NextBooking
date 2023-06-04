import { Review } from '@prisma/client'
import Stars from '../../../components/Stars'

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className='border-b pb-7 mb-7'>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-1/6 flex flex-col items-center'>
          <div className='rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center mb-2'>
            <h2 className='text-white text-2xl uppercase'>
              {review.first_name[0]}
              {review.last_name[0]}
            </h2>
          </div>
          <p className='text-center  mb-2 md:mb-0'>
            {review.first_name} {review.last_name}
          </p>
        </div>
        <div className='ml-0 md:ml-10 w-full md:w-5/6'>
          <div className='flex items-center'>
            <div className='mx-auto md:mr-5'>
              <Stars rating={review.rating} reviews={[]} />
            </div>
          </div>
          <div className='mt-5'>
            <p className='text-lg font-light'>{review.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
