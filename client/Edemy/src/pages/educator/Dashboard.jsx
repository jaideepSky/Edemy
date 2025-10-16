import React, { useEffect, useState } from 'react'
import useAppContext from '../../context/AddContext'
import { assets, dummyDashboardData } from '../../assets/assets'
import  Loading from '../../components/student/Loading'

function Dashboard() {
  const [dashboardData ,setDashboardData] = useState(null)
  const {currency} = useAppContext()
  const fetchDashboardData = async()=>{
    setDashboardData(dummyDashboardData)
  }
  useEffect(()=>{
    fetchDashboardData()
  },[])
  return dashboardData ? (
    <div className=' min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <div className='space-y-5'>
        <div className='flex flex-wrap gap-5 items-center'>
          <div className='flex items-center gap-3 shadow-card border border-blue-500 p-4 w-56 rounded-md'>
            <img src={assets.patients_icon} alt="patient_icon" />
            <div>
              <p className='text-2xl font-medium text-gray-600'>{dashboardData.enrolledStudentsData.length}</p>
              <p className='text-base text-gray-500'>Total Enrollments</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  ) : <Loading/>
}

export default Dashboard