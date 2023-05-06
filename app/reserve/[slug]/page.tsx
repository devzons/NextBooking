import type { Metadata } from 'next'
import Header from './components/Header'
import Form from './components/Form'

export const metadata: Metadata = {
  title: 'reserve at restaurant',
  description: 'Menu page',
}

export default function Reserve() {
  return (
    <div className='border-t h-screen'>
      <div className='py-9 w-3/5 m-auto'>
        <Header />
        <Form />
      </div>
    </div>
  )
}
