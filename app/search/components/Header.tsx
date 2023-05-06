export default function Header() {
  return (
    <div className='bg-gradient-to-r  from-indigo-800 via-purple-700 to-pink-500  p-2'>
      <div className='text-left text-lg py-3 m-auto flex justify-center'>
        <input
          className='rounded  mr-3 p-2 w-[450px]'
          type='text'
          placeholder='State, city or town'
        />
        <button className='rounded bg-pink-900 hover:bg-pink-800 px-9 py-2 text-white'>
          Let's go
        </button>
      </div>
    </div>
  )
}
