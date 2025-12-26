import React from 'react'
import Hero from '../../components/HomePage/Hero/Hero'
import AllTransactions from '../../components/HomePage/AllTransactions/AllTransactions'

const HomePage = () => {
  return (
    <div className='w-screen max-w-full flex flex-col px-6 mt-20'>
        <Hero />
        <AllTransactions />
    </div>
  )
}

export default HomePage