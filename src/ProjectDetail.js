import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './styles/ProjectDetail.css'
import './App.css'
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
        {projectData === '' ? '' : 
        <div className='image-project-detail'>
          <div className='grid grid-1'>
            <img src={projectData[0].imgUrl} className = 'image-project-section'></img>
          </div>
          <div className = 'grid grid-2' id='grid-2'>
            <h1>{projectData === '' ? '' : projectData[0].title}</h1>
            <div className='description-project'>{projectData[0].description}</div>
          </div>        
        </div>
        }

      <Footer />
    </div>
  )
}

export default ProjectDetail