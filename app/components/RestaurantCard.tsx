import Link from 'next/link'
import { RestaurantCardType } from '../page'
import Price from './Price'
import Stars from './Stars'

interface Props {
  restaurant: RestaurantCardType
}

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <div className='w-full md:w-[19%] h-auto m-2 md:m-1 rounded md:overflow-hidden border cursor-pointer'>
      <Link href={`/restaurant/${restaurant.slug}`}>
        <img src={restaurant.main_image} alt={restaurant.name} className='w-full h-40' />
        <div className='p-2'>
          <h3 className='font-semibold text-xl mb-2'>{restaurant.name}</h3>
          <div className='flex justify-start items-center'>
            <Stars reviews={restaurant.reviews} />
            <p className='ml-2 text-sm'>
              {restaurant.reviews.length} review
              {restaurant.reviews.length > 1 ? 's' : ''}
            </p>
          </div>
          <div className='flex text-sm font-light capitalize'>
            <p className=' mr-3'>{restaurant.cuisine.name}</p>
            <Price price={restaurant.price} />
            <p>{restaurant.location.name}</p>
          </div>
          <p className='text-sm mt-1 font-semibold'>Booked 3 times today</p>
        </div>
      </Link>
    </div>
  )
}
