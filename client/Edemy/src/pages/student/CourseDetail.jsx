import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAppContext from "../../context/AddContext";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";

function CourseDetail() {
  const { id } = useParams();
  console.log(id);
  const [courseData, setCourseData] = useState(null);
  const { allCourses } = useAppContext();

  const fetchData =  () => {
    const findCourse =   allCourses.find((course) => {
      return course._id === id;
    });
    setCourseData(findCourse);
    console.log(courseData)
  };
  useEffect(() => {
    fetchData();
  }, []);

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
    
  courseData ?
    (  <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36  pt-20 text-left">

    <div className="absolute top-0 left-0 w-full h-[500px] z-10 bg-gradient-to-b from-cyan-100/70">
    
    </div>

      {/* Left Column */}
      <div className="max-w-xl z-10 text-gray-500">
        <h1 className=" md:text-[36px] text-[26px] font-semibold text-gray-800">{courseData.courseTitle}</h1>
        <p
        className="pt-4 md:text-base text-sm"
        dangerouslySetInnerHTML={{__html:courseData.courseDescription.slice(0,200)}}></p>

      {/* review and rating section  */}
         <div className='flex items-center space-x-2'>
                  <p>{calculateRating(courseData)}</p>
                  <div className='flex'>
                    {
                      Array.from({length:5}).map((_,i)=>{
                        return (
                          <img key={i} src={i<Math.floor(calculateRating(courseData))?assets.star : assets.star_blank} alt=""  className='w-3.5 h-3.5'/>
                        )
                      })
                    }
                  </div>
                  <p className='text-blue-600'>({courseData.courseRatings.length} {courseData.courseRatings.length>1 ? "ratings" : 'rating'})</p>
                  <p>{courseData.enrolledStudents.length} {courseData.enrolledStudents.length>1?'students':'student'}</p>
                </div>

      </div>
      {/* Right Column */}
      <div></div>

    </div>)
    : <Loading/>
 

  );
}

export default CourseDetail;
