import Link from 'next/link'
import AuthModal from './AuthModal'

export default function NavBar() {
  return (
    <nav className='bg-white p-2 flex justify-between'>
      <Link href='/' className='text-indigo-800 text-2xl'>
        <span className='font-light'>
          Open<span className='font-bold'>Booking</span>
        </span>
      </Link>
      <div>
        <div className='flex'>
          <AuthModal isSignin={true} />
          <AuthModal isSignin={false} />
        </div>
      </div>
    </nav>
  )
}
