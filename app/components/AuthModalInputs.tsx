interface Props {
  inputs: {
    firstName: string
    lastName: string
    email: string
    phone: string
    city: string
    password: string
  }
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
  isSignin: boolean
}

export default function AuthModalInputs() {
  return (
    <div>
      <div className='my-3 flex justify-between text-sm'>
        <input
          type='text'
          className='border rounded p-2 py-3 w-[49%]'
          placeholder='First Name'
        />
        <input
          type='text'
          className='border rounded p-2 py-3 w-[49%]'
          placeholder='Last Name'
        />
      </div>
      <div className='my-3 flex justify-between text-sm'>
        <input
          type='eamil'
          className='border rounded p-2 py-3 w-full'
          placeholder='Email'
        />
      </div>
      <div className='my-3 flex justify-between text-sm'>
        <input
          type='text'
          className='border rounded p-2 py-3 w-[49%]'
          placeholder='Phone'
        />
        <input
          type='text'
          className='border rounded p-2 py-3 w-[49%]'
          placeholder='City'
        />
      </div>
      <div className='my-3 flex justify-between text-sm'>
        <input
          type='password'
          className='border rounded p-2 py-3 w-full'
          placeholder='Password'
        />
      </div>
    </div>
  )
}
