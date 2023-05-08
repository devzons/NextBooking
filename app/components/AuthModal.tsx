'use client'

import { useState, useEffect, useContext } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import AuthModalInputs from './AuthModalInputs'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}

export default function AuthModal({ isSignin }: { isSignin: boolean }) {
  const [open, setOpen] = useState(false)
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    password: '',
  })
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const renderContent = (signInContent: string, signUpContent: string) => {
    return isSignin ? signInContent : signUpContent
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <button
        onClick={handleOpen}
        className={`${renderContent(
          'bg-indigo-600 hover:bg-indigo-500 text-white',
          ' border-indigo-100 p-1 px-4 rounded hover:bg-indigo-100'
        )} border p-1 px-4 rounded mr-3`}
      >
        {renderContent('Sign in', 'Sign up')}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className='p-2'>
            <div className='uppercase font-bold text-center pb-2 border-b mb-2'>
              <p className='text-sm'>
                {renderContent('Sign In', 'Create An Account')}
              </p>
            </div>
            <div className='m-auto'>
              <h2 className='text-2xl font-light text-center'>
                {renderContent(
                  'Log Into Your Account',
                  'Create Your OpenBooking Account'
                )}
              </h2>
              <AuthModalInputs
                inputs={inputs}
                handleChangeInput={handleChangeInput}
                isSignin={isSignin}
              />
              <button className='uppercase bg-purple-700 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400'>
                {renderContent('Sign In', 'Create Account')}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}