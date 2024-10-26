import Link from 'next/link'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 text-center'>
      <h1 className='text-4xl font-bold mb-4'>Wellcome to My Portfolio</h1>
      <p className='text-lg mb-6'>"Explore my creative portfolio"</p>
      <Link href="#get-started" className='bg-blue-600 text white px-6 py-3 rounded-md text-lg transition duration-300 hover:bg-blue-500'>Get Started</Link>
    </div>
  )
}

export default Portfolio
