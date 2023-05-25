import type { Metadata } from 'next'
import { RestaurantNavBar, Menu } from '../components'
import prisma from '@/lib/prismadb'

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: {
      items: true,
    },
  })

  if (!restaurant) {
    throw new Error()
  }

  return restaurant.items
}

export const metadata: Metadata = {
  title: 'menu | restaurant',
  description: 'Menu page',
}

export default async function RestaurantMenu({
  params,
}: {
  params: { slug: string }
}) {
  const menu = await fetchRestaurantMenu(params.slug)

  return (
    <div className='bg-white w-[100%] rounded p-3 shadow'>
      <RestaurantNavBar slug={params.slug} />
      <Menu menu={menu} />
    </div>
  )
}
