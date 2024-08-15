import React from 'react'
import Profilecard from './Profilecard'
import Homecard from './Homecard'
import '../Styles/homecard.scss'

const Home = () => {
  return (
    <div className='homepage'>
      <Profilecard/>
      <Homecard/>
    </div>
  )
}

export default Home
