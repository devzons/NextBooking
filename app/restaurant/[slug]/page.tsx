import type { Metadata } from 'next'
import {
  RestaurantNavBar,
  Rating,
  Description,
  Title,
  Images,
  Reviews,
  ReservationCard,
} from './components'

export const metadata: Metadata = {
  title: 'Restaurant',
  description: 'Restaurant description',
}

export default function RestaurantDetails() {
  return (
    <>
      <div className='bg-white w-[70%] rounded p-3 shadow'>
        <RestaurantNavBar />
        <Title />
        <Rating />
        <Description />
        <Images />
        <Reviews />
      </div>

      <div className='w-[27%] relative text-reg'>
        <ReservationCard />
      </div>
    </>
  )
}
