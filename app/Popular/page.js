import React from 'react'
import Header from '@/components/Header'
import './styles.css';

const page = () => {
  return (
    <>
      <Header />
      <div className='popular-container'>
        <h1>Popular Page</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
    </>
  )
}

export default page
