import SearchBar from './SearchBar'

export default function Header() {
  return (
    <div className='h-64 bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-500 p-2'>
      <div className='text-center mt-10'>
        <h1 className='text-white text-6xl font-md mb-2'>
          Find your table for any occasion
        </h1>
        <SearchBar />
      </div>
    </div>
  )
}
