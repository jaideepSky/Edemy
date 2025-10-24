import React from 'react'
import Hero from '../../components/student/Hero.jsx'
import Companies from '../../components/student/Companies.jsx'
import CourseSection from '../../components/student/CourseSection.jsx'
import TestimonialsSection from '../../components/student/TestimonialsSection.jsx'
import CallToAction from '../../components/student/CallToAction.jsx'
import Footer from '../../components/student/Footer.jsx'
import CourseDetail from './CourseDetail.jsx'


function Home() {
  return (
    <div className='flex flex-col items-center space-y-7 text-center' >
     <Hero/>
     <Companies/>
     <CourseSection/>
     <TestimonialsSection/>
     <CallToAction/>
     <Footer/>
     <CourseDetail/>
    
    </div>
  )
}

export default Home