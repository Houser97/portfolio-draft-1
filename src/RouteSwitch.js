import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import ProjectDetail from './ProjectDetail'

function RouteSwitch ()  {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/portfolio-draft-1' element = {<App />} />
            <Route path='/portfolio-draft-1/project/:name' element = {<ProjectDetail />}  />
        </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch