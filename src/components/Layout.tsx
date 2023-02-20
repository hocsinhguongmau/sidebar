import React from 'react'
import Header from './Header'
import Navigation from './Navigation'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className='h-screen flex flex-col'>
      <Header />
      <div className='flex h-full'>
        <Navigation />
        <div className='p-4'>{children}</div>
      </div>
    </div>
  )
}
