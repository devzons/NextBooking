import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className='bg-white p-2 flex justify-between'>
      <Link href='/' className='text-indigo-700 text-2xl'>
        <span className='font-light'>
          Open<span className='font-bold'>Booking</span>
        </span>
      </Link>
      <div>
        <div className='flex'>
          <button className='bg-indigo-600 hover:bg-indigo-500 text-white border p-1 px-4 rounded mr-3'>
            Sign in
          </button>
          <button className='border border-indigo-100 p-1 px-4 rounded hover:bg-indigo-100'>
            Sign up
          </button>
        </div>
      </div>
    </nav>
  )
}
