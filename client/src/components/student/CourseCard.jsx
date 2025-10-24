import React from 'react'
import { assets } from '../../assets/assets'
import useAppContext from '../../context/AddContext'
import { Link } from 'react-router'

function CourseCard({courseDetail}) {
  const{currency} = useAppContext()
 
  const calculateRating = (course)=>{
    let totalRating = 0 
    if(course.courseRatings.length === 0){
      return 0
    }
    else{
      course.courseRatings.forEach((rating)=>{
      return  totalRating = totalRating + rating.rating
      })
     return totalRating/course.courseRatings.length
    }
  }
  return (
    <Link to={'/course/'+ courseDetail._id} onClick={()=>scrollTo(0,0)}
    className='border border-gray-500/30 pb-6 overflow-hidden rounded-lg'
    > 
      <img
      className='w-full'
      src={courseDetail.courseThumbnail} alt="" />
      <div className='p-3 text-left'>
        <h3 className='text-base font-semibold'>{courseDetail.courseTitle}</h3>
        <p className='text-gray-500'>{courseDetail.educator.name}</p>
        <div className='flex items-center space-x-2'>
          <p>{calculateRating(courseDetail)}</p>
          <div className='flex'>
            {
              Array.from({length:5}).map((_,i)=>{
                return (
                  <img key={i} src={i<Math.floor(calculateRating(courseDetail))?assets.star : assets.star_blank} alt=""  className='w-3.5 h-3.5'/>
                )
              })
            }
          </div>
          <p className='text-gray-500'>{courseDetail.courseRatings.length}</p>
        </div>
        <p className='text-base font-semibold text-gray-800'>{currency}{(courseDetail.coursePrice-courseDetail.discount*courseDetail.coursePrice/100).toFixed(2)}</p>
      </div>
    </Link>
  )
}

export default CourseCard