import SearchBar from './SearchBar'

export default function Header() {
  return (
    <div className='h-60 bg-gradient-to-r from-pink-500 via-purple-700 to-indigo-800 p-2'>
      <div className='text-center mt-10'>
        <h1 className='text-white text-5xl font-md mb-2'>
          Find your table for any occasion
        </h1>
        <SearchBar />
      </div>
    </div>
  )
}
