import { Cuisine, Location, PRICE, Review } from '@prisma/client'
import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'
import prisma from '@/lib/prismadb'

export interface RestaurantCardType {
  id: number
  name: string
  main_image: string
  cuisine: Cuisine
  location: Location
  price: PRICE
  slug: string
  reviews: Review[]
}

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      slug: true,
      cuisine: true,
      location: true,
      price: true,
      reviews: true,
    },
  })
  return restaurants
}

export default async function Home() {
  const restaurants = await fetchRestaurants()

  return (
    <>
      <Header />
      <div className='py-3 mt-10 flex flex-wrap justify-center'>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </>
  )
}
