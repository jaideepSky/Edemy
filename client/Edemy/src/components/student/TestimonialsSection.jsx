import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets.js'

function TestimonialsSection() {
  return (
    <div className='pb-4 px-8 md:px-0'>
      <h2 className='text-3xl font-medium text-gray-800'>Testinomials</h2>
      <p className='md:text-base  text-gray-500 mt-3'>Hear from our learners as they share their journey of transformation,success,and how our <br /> platform has made a difference in their lives.</p>

      <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 mt-4'>
        {dummyTestimonial.map((testinomial,i)=>(
          <div key={i} className='text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden'>
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
              <img className='h-12 w-12 rounded-full' src={testinomial.image} alt={testinomial.name} />
              <div>
                <h1 className='text-lg font-medium text-gray-800'>{testinomial.name}</h1>
                <p className='text-gray-800/80'>{testinomial.role}</p>
              </div>
             
            </div>
             <div className='p-5 pb-7'>
                <div className='flex gap-0.5'>
                {
                  Array.from({length:5}).map((_,i)=>{
                    return(

                      <img className='h-5' src={i<Math.floor(testinomial.rating)?assets.star : assets.star_blank} key={i} alt="star" />
                    )

                  })
                }
              </div>
              <p className='text-gray-500 mt-5'>{testinomial.feedback}</p>
              </div>
              <a href="#" className='text-blue-500 underline px-5'>Read More</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsSection