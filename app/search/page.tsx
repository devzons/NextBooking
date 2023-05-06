import type { Metadata } from 'next'
import { PrismaClient } from '@prisma/client'
import Header from './components/Header'
import SearchSideBar from './components/SearchSideBar'
import RestaurantCard from './components/RestaurantCard'

export const metadata: Metadata = {
  title: 'search | OpenBooking',
  description: 'Search Results',
}

const prisma = new PrismaClient()

const fetchRestaurantsByCity = (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  }

  if (!city) return prisma.restaurant.findMany()
  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLocaleLowerCase(),
        },
      },
    },
    select,
  })
}

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string }
}) {
  const restaurants = await fetchRestaurantsByCity(searchParams.city)

  return (
    <>
      <Header />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <div className='w-1/5'>
          <SearchSideBar />
        </div>
        <div className='w-5/6'>
          {restaurants.length ? (
            restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))
          ) : (
            <p className='text-xl font-semibold'>
              Sorry, we found no restaurant in this area
            </p>
          )}
        </div>
      </div>
    </>
  )
}
