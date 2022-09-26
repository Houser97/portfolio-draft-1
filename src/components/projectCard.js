import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/projectCard.css'

const ProjectCard = ({ title, description, imgUrl }) => {

  const [formattedTitle, setFormattedTitle] = useState(title)

  useEffect(() => {
    let formatTitle = title.replace(/\s/g, '-');
    setFormattedTitle(formatTitle);
  }, [])
  

  return (

    <Link to = {`project/${formattedTitle}`} className = 'proj-imgbx'>
      <img src={imgUrl} className = 'img-project' alt="project"/>
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </Link>

  )
}

export default ProjectCard;