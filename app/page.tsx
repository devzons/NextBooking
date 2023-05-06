import NavBar from './components/NavBar'
import Header from './components/Header'
import RestaurantCard from './components/RestaurantCard'

export default function Home() {
  return (
    <div className='bg-gray-100 min-h-screen w-screen'>
      <div className='max-w-screen-2xl m-auto bg-white'>
        <NavBar />
        <main>
          <Header />
          <RestaurantCard />
        </main>
      </div>
    </div>
  )
}
