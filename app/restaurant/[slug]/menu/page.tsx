import type { Metadata } from 'next'
import { RestaurantNavBar, Menu } from '../components'

export const metadata: Metadata = {
  title: 'menu | restaurant',
  description: 'Menu page',
}

export default function RestaurantMenu() {
  return (
    <div className='bg-white w-[100%] rounded p-3 shadow'>
      <RestaurantNavBar />
      <Menu />
    </div>
  )
}
