
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/student/Home.jsx'
import CourseList from './pages/student/CourseList.jsx'
import CourseDetail from './pages/student/CourseDetail.jsx'
import MyEnrollments from './pages/student/MyEnrollments.jsx'
import Player from './pages/student/Player.jsx'
import Educator from './pages/educator/Educator.jsx'
import Loading from './components/student/Loading.jsx'
import Dashboard from './pages/educator/Dashboard.jsx'
import AddCourse from './pages/educator/AddCourse.jsx'
import MyCourses from './pages/educator/MyCourses.jsx'
import StudentEnrolled from './pages/educator/StudentsEnrolled.jsx'
import {ClerkProvider} from '@clerk/clerk-react'
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
     {
      path:'/',
      element:<Home/>
     },
       {
      path:'/course-list',
      element:<CourseList/>
     },
       {
      path:'/course-list/:input',
      element:<CourseList/>
     },

       {
      path:'/course/:id',
      element:<CourseDetail/>
     },
       {
      path:'/my-enrollments',
      element:<MyEnrollments/>
     },
       {
      path:'/player/:courseId',
      element:<Player/>
     },
       {
      path:'/loading/:path',
      element:<Loading/>
     },
       {
      path:'/educator',
      element:<Educator/>,
      children:[
        {
          path:'',
          element:<Dashboard/>
        },
        {
          path:'add-course',
          element:<AddCourse/>
        },
           {
          path:'my-courses',
          element:<MyCourses/>
        },
           {
          path:'student-enrolled',
          element:<StudentEnrolled/>
        }
      ]
     },
     
    ]
  },
]);

createRoot(document.getElementById('root')).render(
 <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
  <RouterProvider router={router} />
 </ClerkProvider>
)
