import type { Metadata } from 'next'
import { PRICE } from '@prisma/client'
import Header from './components/Header'
import SearchSideBar from './components/SearchSideBar'
import RestaurantCard from './components/RestaurantCard'
import prisma from '@/lib/prismadb'

export const metadata: Metadata = {
  title: 'search | OpenBooking',
  description: 'Search Results',
}

interface SearchParams {
  city?: string
  cuisine?: string
  price?: PRICE
}

const fetchRestaurantsByCity = (searchParams: SearchParams) => {
  const where: any = {}

  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    }
    where.location = location
  }

  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    }
    where.cuisine = cuisine
  }

  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    }
    where.price = price
  }

  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
    reviews: true,
  }

  return prisma.restaurant.findMany({
    where,
    select,
  })
}

const fetchLocations = async () => {
  return prisma.location.findMany()
}

const fetchCuisines = async () => {
  return prisma.cuisine.findMany()
}

export default async function Search({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const restaurants = await fetchRestaurantsByCity(searchParams)
  const locations = await fetchLocations()
  const cuisines = await fetchCuisines()

  return (
    <>
      <Header />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <div className='w-1/6 mr-3'>
          <SearchSideBar
            locations={locations}
            cuisines={cuisines}
            searchParams={searchParams}
          />
        </div>
        <div className='w-5/6 ml-3'>
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
