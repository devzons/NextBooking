import SearchBar from './SearchBar'

export default function Header() {
  return (
    <div className='h-64 bg-gradient-to-r from-pink-500 via-purple-700 to-indigo-800 p-2'>
      <div className='text-center mt-5 md:mt-10'>
        <h1 className='text-white text-4xl font-semibold mb-5'>Find your table for any occasion</h1>
        <SearchBar />
      </div>
    </div>
  )
}
