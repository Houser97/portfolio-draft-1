import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import ProjectDetail from './ProjectDetail'

function RouteSwitch ()  {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<App />} />
            <Route path='/project/:name' element = {<ProjectDetail />}  />
        </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch