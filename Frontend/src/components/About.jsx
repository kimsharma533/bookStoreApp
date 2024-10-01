import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
        <div className='mt-28 items-center text-center justify-center'>
          <h1 className='text-2xl  md:text-4xl'> Welcome to <span className='text-pink-500'>BookStore:)</span></h1>
          <p className='mt-12'>
          Discover a world of literature at your fingertips! Our online bookstore offers an extensive collection of books across all genres, from timeless classics to the latest bestsellers. Whether you're a casual reader or a passionate bibliophile, you’ll find something to spark your interest.
          </p>
          <div className='m-5'>
          <span className='font-bold'>What We Offer:</span><br/>
         <span className='text-pink-500'> Curated Collections:</span> Explore handpicked selections tailored to every taste, including fiction, non-fiction, poetry, and more.<br/>
         <span className='text-pink-500'> User-Friendly Experience:</span> Easily browse, search, and filter through our vast catalog to find your next great read.<br/>
          <span className='text-pink-500'>Community Engagement:</span> Join our vibrant community of readers with book clubs, reviews, and author events.<br/>
          <span className='text-pink-500'>Exclusive Deals:</span> Enjoy special promotions, discounts, and recommendations to enhance your reading journey.<br/>
          </div>
          <Link to="/">
          <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
          </Link>
        </div>
        </div>
    </>
  )
  
}

export default About