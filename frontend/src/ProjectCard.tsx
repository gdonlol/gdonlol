import { HashLink } from 'react-router-hash-link'

const ProjectCard = ({name, desc, thumb, markdown}: {name: string, desc: string, thumb: string, markdown: string}) => {
  return (
    <HashLink className='project-card' to={`/project/${markdown}#md`}>
      <h2>{name}</h2>
      <h3>{desc}</h3>
      {thumb && <img src={thumb}/>}
    </HashLink>
  )
}

export default ProjectCard