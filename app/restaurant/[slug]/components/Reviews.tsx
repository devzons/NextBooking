import { Review } from '@prisma/client'
import ReviewCard from './ReviewCard'

export default function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <div>
      <h2 className='font-semibold text-3xl mt-10 mb-7 borber-b pb-5'>
        What {reviews.length} {reviews.length > 1 ? 'people are' : 'person is'}{' '}
        saying
      </h2>
      <div>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  )
}
