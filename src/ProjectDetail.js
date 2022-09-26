import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './components/navbar';
import './styles/ProjectDetail.css'

const ProjectDetail = () => {

  let {name} = useParams();

  return (
    <div className='project-detail-template'>
        <Navbar isAppComponent={false}/>
        Houser
    </div>
  )
}

export default ProjectDetail