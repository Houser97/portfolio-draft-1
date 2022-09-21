import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'

function RouteSwitch ()  {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/portfolio-draft-1' element = {<App />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch