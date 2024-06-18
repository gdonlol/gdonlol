
const ProjectCard = ({name, desc, link, thumb}: {name: string, desc: string, link: string, thumb: string}) => {
  return (
    <a className='project-card' href={link}>
      <h2>{name}</h2>
      <h3>{desc}</h3>
      <img src={thumb}/>
    </a>
  )
}

export default ProjectCard