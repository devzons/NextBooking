import ReviewCard from './ReviewCard'

export default function Reviews() {
  return (
    <div>
      <h2 className='font-semibold text-3xl mt-10 mb-7 borber-b pb-5'>
        What 100 people are saying
      </h2>
      <div>
        <ReviewCard />
      </div>
    </div>
  )
}
