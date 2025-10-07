import "./App.css";

import { AppContextProvider } from "./context/AddContext.jsx";
import Navbar from "./components/student/Navbar.jsx";
import { Outlet, useMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import { dummyCourses } from "./assets/assets.js";

function App() {

  const isEducatorRoute = useMatch('/educator/*')
  const[allCourses , setAllCourses] = useState([])
  const fetchAllCourses =  async()=>{
    setAllCourses(dummyCourses)
  }

  useEffect(()=>{
    fetchAllCourses()
  },[])

  const [isEducator , setIsEducator] = useState(false)
  return (
    <>
      <AppContextProvider value={{allCourses , fetchAllCourses , isEducator }}>
        <div className="text-default min-h-screen bg-white">
          {!isEducatorRoute && <Navbar />}
        <Outlet />
        </div>

      </AppContextProvider>
    </>
  );
}

export default App;
