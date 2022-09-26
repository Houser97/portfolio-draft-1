import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './components/navbar';
import './styles/ProjectDetail.css'
import { projects } from './constants/constants';

const ProjectDetail = () => {

  const [projectData, setProjectData] = useState('')

  let {name} = useParams();

  useEffect(() => {
    let nameProject = name.replace(/-/g, ' ')
    let project = projects.filter(project => project.title === nameProject)
    console.log(project)
    setProjectData(project);
  }, [])

  return (
    <div className='project-detail-template'>
      <Navbar isAppComponent={false} />
        {projectData === '' ? '' : projectData[0].title}
    </div>
  )
}

export default ProjectDetail