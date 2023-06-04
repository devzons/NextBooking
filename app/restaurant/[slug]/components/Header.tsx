export default function Header({ name }: { name: string }) {
  const renderName = () => {
    const nameArray = name.split('-')
    nameArray[nameArray.length - 1] = `(${nameArray[nameArray.length - 1]})`
    return nameArray.join(' ')
  }

  return (
    <div className='h-48 md:h-96 overflow-hidden'>
      <div className='bg-center bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-500 h-full flex justify-center items-center'>
        <h1 className='text-3xl md:text-6xl text-white capitalize text-shadow text-center'>{renderName()}</h1>
      </div>
    </div>
  )
}
