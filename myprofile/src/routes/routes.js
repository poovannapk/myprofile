import React from 'react'
import { BrowserRouter as Router, Route, Outlet } from 'react-router-dom'
import Aboutme from'../pages/aboutme'
import Education from '../pages/education'

const Routes = () => {
  return (
    <Router>
      <Route path='/aboutme' element={<Aboutme />}/>
      <Route path='/education' element={<Education />}/>
    </Router>
  )
}

export default Routes