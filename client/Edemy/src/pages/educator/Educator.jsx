import React from 'react'
import { Outlet } from 'react-router'

function Educator() {
  
  return (
    <div>
        <h1>Educator page</h1>
        <div>
          <Outlet/>
        </div>
    </div>
  )
}

export default Educator
