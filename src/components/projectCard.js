import '../styles/projectCard.css'

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
      <a href='project' className="proj-imgbx">
        <img src={imgUrl} className = 'img-project' alt="project"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </a>
  )
}

export default ProjectCard;