import Link from 'next/link'

export default function Search() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <div className='max-w-screen-2xl m-auto bg-white'>
        {/* NAVBAR */}
        <nav className='bg-white p-2 flex justify-between'>
          <Link href='/' className='font-bold text-indigo-700 text-2xl'>
            <span className='font-thin'>
              Open<span className='font-semibold'>Booking</span>
            </span>
          </Link>
          <div>
            <div className='flex'>
              <button className='bg-blue-400 text-white border p-1 px-4 rounded mr-3'>
                Sign in
              </button>
              <button className='border p-1 px-4 rounded'>Sign up</button>
            </div>
          </div>
        </nav>
        {/* HEADER */}
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
        <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
          {/* SEARCH SIDE BAR */}
          <div className='w-1/5'>
            <div className='border-b pb-4'>
              <h1 className='mb-2'>Region</h1>
              <p className='font-light text-reg'>Toronto</p>
              <p className='font-light text-reg'>Ottawa</p>
              <p className='font-light text-reg'>Montreal</p>
              <p className='font-light text-reg'>Hamilton</p>
              <p className='font-light text-reg'>Kingston</p>
              <p className='font-light text-reg'>Niagara</p>
            </div>
            <div className='border-b pb-4 mt-3'>
              <h1 className='mb-2'>Cuisine</h1>
              <p className='font-light text-reg'>Mexican</p>
              <p className='font-light text-reg'>Italian</p>
              <p className='font-light text-reg'>Chinese</p>
            </div>
            <div className='mt-3 pb-4'>
              <h1 className='mb-2'>Price</h1>
              <div className='flex'>
                <button className='border w-full text-reg font-light rounded-l p-2'>
                  $
                </button>
                <button className='border-r border-t border-b w-full text-reg font-light p-2'>
                  $$
                </button>
                <button className='border-r border-t border-b w-full text-reg font-light p-2 rounded-r'>
                  $$$
                </button>
              </div>
            </div>
          </div>
          {/* SEARCH SIDE BAR */}
          <div className='w-5/6'>
            {/* RESAURANT CAR */}
            <div className='border-b flex pb-5'>
              <img
                src='https://images.otstatic.com/prod1/49153814/2/medium.jpg'
                alt=''
                className='w-44 rounded'
              />
              <div className='pl-5'>
                <h2 className='text-3xl'>Aiāna Restaurant Collective</h2>
                <div className='flex items-start'>
                  <div className='flex mb-2'>*****</div>
                  <p className='ml-2 text-sm'>Awesome</p>
                </div>
                <div className='mb-9'>
                  <div className='font-light flex text-reg'>
                    <p className='mr-4'>$$$</p>
                    <p className='mr-4'>Mexican</p>
                    <p className='mr-4'>Ottawa</p>
                  </div>
                </div>
                <div className='text-red-600'>
                  <a href=''>View more information</a>
                </div>
              </div>
            </div>
            {/* RESAURANT CAR */}
          </div>
        </div>
      </div>
    </main>
  )
}
