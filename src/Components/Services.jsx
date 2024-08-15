import React from 'react'
import ServiceCard from './ServiceCard'
import Marque from './Marque';

import '../Styles/marque.scss';




const Services = () => {
  const courses = [
    {
      title: 'Frontend Development',
      item: ['React', 'Tailwind'],
      bgColor: '#f9b234',
    },
    {
      title: 'Backend Development',
      item: ['Node.js', 'Express'],
      bgColor: '#3ecd5e',
    },
    {
      title: 'Android Development',
      item: ['Kotlin', 'Java'],
      bgColor: '#f9b234',
    },
    {
      title: 'Multiplatform Dev..',
      item: ['Flutter'],
      bgColor: '#3ecd5e',
    },
    // Add more course objects as needed
  ];
  return (
    <div className='background'>
      <h1>Services</h1>
      <hr />
     <div className="card-box">
     <div className="course-container">
      {courses.map((course, index) => (
        <ServiceCard key={index} {...course} />
      ))}
    </div>     
    </div>
    <Marque/>
    </div>
  )
}

export default Services
