import { createContext, useContext } from "react";
export const AppContext = createContext({
     currency : import.meta.env.VITE_CURRENCY,
     allCourses : [],
     fetchAllCourses : ()=>{},
     isEducator:false,
     calculateChapterTime: ()=>{},
     calculateCourseDuration: ()=>{},
     totalLectures : ()=>{},
     enrolCourse : [],
     fetchEnrolledCourses : ()=>{},
   
})

export default function useAppContext (){
    return useContext(AppContext)
}
export const AppContextProvider = AppContext.Provider
