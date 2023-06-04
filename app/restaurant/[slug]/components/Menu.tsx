import { Item } from '@prisma/client'
import MenuCard from './MenuCard'

export default function Menu({ menu }: { menu: Item[] }) {
  return (
    <div className='bg-white mt-5'>
      <div>
        <div className='mt-4 pb-1 mb-1'>
          <h1 className='font-bold text-4xl'>Menu</h1>
        </div>
        <div className='flex flex-col md:flex-wrap md:justify-between'>
          {menu.length ? (
            <div className='grid md:grid-cols-2 md:gap-4'>
              {menu.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <p className='my-5'>This restaurant will provide menu soon.</p>
          )}
        </div>
      </div>
    </div>
  )
}
