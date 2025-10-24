import "./App.css";

import { AppContextProvider } from "./context/AddContext.jsx";
import Navbar from "./components/student/Navbar.jsx";
import { Outlet, useMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import { dummyCourses } from "./assets/assets.js";
import humanizeDuration from "humanize-duration";
import "quill/dist/quill.snow.css";

function App() {
  const isEducatorRoute = useMatch("/educator/*");
  const [isEducator, setIsEducator] = useState(true);

  const [allCourses, setAllCourses] = useState([]);
  const [enrolCourse,setEnrollCourse] = useState([])

  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

    const fetchEnrolledCourses = async()=>{
      setEnrollCourse(dummyCourses)
  }

  useEffect(() => {
    fetchAllCourses();
    fetchEnrolledCourses()
  }, []);

  const calculateChapterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.map((lecture) => {
      return (time += lecture.lectureDuration);
    });
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  const calculateCourseDuration = (course) => {
    let totalDuration = 0;
    course.courseContent.map((chapter) => {
      return chapter.chapterContent.map((lecture) => {
        return (totalDuration += lecture.lectureDuration);
      });
    });
    return humanizeDuration(totalDuration * 60 * 1000, { units: ["h", "m"] });
  };

  const totalLectures = (course) => {
    let totalLectures = 0;
    course.courseContent.map((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        return (totalLectures += chapter.chapterContent.length);
      }
    });
    return totalLectures;
  };



  return (
    <>
      <AppContextProvider
        value={{
          allCourses,
          fetchAllCourses,
          isEducator,
          calculateChapterTime,
          calculateCourseDuration,
          totalLectures,
          enrolCourse,
          fetchEnrolledCourses,
          
        }}
      >
        <div className="text-default min-h-screen bg-white">
          {!isEducatorRoute && <Navbar />}
          <Outlet />
        </div>
      </AppContextProvider>
    </>
  );
}

export default App;
