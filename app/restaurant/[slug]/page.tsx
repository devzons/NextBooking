import NavBar from '@/app/components/NavBar'
import {
  Header,
  RestaurantNavBar,
  Rating,
  Description,
  Title,
  Images,
  Reviews,
  ReservationCard,
} from './components'

export default function RestaurantDetails() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <div className='max-w-screen-2xl m-auto bg-white'>
        <NavBar />
        <Header />
        <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
          {/* contents */}
          <div className='bg-white w-[70%] rounded p-3 shadow'>
            <RestaurantNavBar />
            <Title />
            <Rating />
            <Description />
            <Images />
            <Reviews />
          </div>
          {/* ReservationCard */}
          <div className='w-[27%] relative text-reg'>
            <ReservationCard />
          </div>
        </div>
      </div>
    </main>
  )
}
