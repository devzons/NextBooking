import type { Metadata } from 'next'
import Header from './components/Header'
import SearchSideBar from './components/SearchSideBar'
import RestaurantCard from './components/RestaurantCard'

export const metadata: Metadata = {
  title: 'search | OpenBooking',
  description: 'Menu page',
}

export default function Search() {
  return (
    <>
      <Header />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <SearchSideBar />
        <div className='w-5/6'>
          <RestaurantCard />
        </div>
      </div>
    </>
  )
}
